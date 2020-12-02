import {connection} from '../database/connection'
import * as jwt from '../setup/jwt'
import Util from '../helpers/Util'
import Mailer from '../helpers/mailer'
import argon2, { hash } from 'argon2' //algoritmo de hash
import fs from 'fs'
import crypto from 'crypto'
import sha1 from 'sha1'

import 'dotenv/config'
import Model from '../models/Model'

const db = connection


const userDefault = ['id', 'name', 'email', 'whatsapp', 'city', 'uf', 'password', 'total_trampos', 'third_party_id', 'image_url', 'hash_url_to_change_pass', 'req_change_pass_time']

const { handleError, clearString, mysqlNowFormat, dateTimeToISO } = new Util()
const util = new Util()

const mailer = new Mailer()
const u = new Model('users')

const cp = new Model('change_pass_occurrences')

export default {
	async profile(req, res) {
		const { id } = req.params
		const { id: req_id } = req.auth //id do user autenticado e logado

		const exists = await u.get({id},true)
		if (!exists || exists === undefined || exists === '') return handleError(res, 401, `User ${id} not exists`)
		delete exists.password

		const assignedServices = await db(db.ref('completed_services').as('cp')).select('s.*')
		.join(db.ref('users').as('u'), 'u.id', '=', 'cp.user_assigned_id')
		.join(db.ref('services').as('s'), 's.id', '=', 'cp.service_id' )

		console.log(assignedServices, 'downe orks')

		
		const requestedServices = await db(db.ref('completed_services').as('cp')).select('s.*')
		.join(db.ref('users').as('u'), 'u.id', '=', 'cp.user_requested_id')
		.join(db.ref('services').as('s'), 's.id', '=', 'cp.service_id' )

		if (id === req_id) {
			//ĺógica para a possibilidade de editar os dados!!
			console.log('USER ENTROU NO PRÓPRIO PERFIL')
			exists.changePermission = true
		} else {
			//dados são somente visíveis ao user 'requisitante'
			console.log('USER ENTROU NO PERFIL DE OUTRO')
			exists.changePermission = false
		}

		return res.json({
			exists, //usuário
			assignedServices, // serviços feitos 
			requestedServices // serviços postados
		})
	},
	async uploadImage(req, res) {
		try {
			const [, tipoImg] = req.file.mimetype.split('/')

			const { name: original_name, id } = req.auth
			if (!id || id === undefined || id === '') return handleError(res, 401, 'Operação não permitida')

			if (req.file === undefined || !req.file) return handleError(res, 400, 'Archive Does not exists')

			const name_user = clearString(original_name)
			console.log(name_user)

			fs.rename(
				`./uploads/${req.file.originalname}`, //nome antigo
				`./uploads/${name_user}-${id}.${tipoImg}`, //novo nome
				err => {
					//catch
					if (err) return handleError(res, 400, `Erro: ${err}`)
					console.log('Arquivo renomeado')
				}
			)
			//renomeando arquivo para inserir path no banco
			//NOME_USER-ID_USER.TIPO
			req.file.originalname = `${name_user}-${id}.${tipoImg}`
			req.file.filename = `${name_user}-${id}.${tipoImg}`
			//caminho da imagem
			req.file.path = `uploads/${req.file.filename}`

			
			await u.update({id} ,{image_url: req.file.path})
			console.log('inseriu path image no banco')

			return res.json({
				image: req.file,
			})
		} catch (e) {
			return handleError(res, 400, e)
		}
	},
	async updateData(req, res) {
		const { id: user_id } = req.auth
		const { newValue } = req.body
		const { type } = req.params

		let typeExists = false

		if (newValue === undefined || newValue === null || newValue === '') return handleError(res, 400, `Você precisa declarar um Novo valor para ${type}`)

		userDefault.filter(field => {
			if (field === type) return (typeExists = true)
		})
		console.log(typeExists)

		if (typeExists) {
			try {
				
				const result = await u.update({id:user_id}, { [type]: [newValue] })
				console.log(result, 'result')
				if (result !== undefined && result !== '') {
					
					const newUser = await u.get({id}, true)

					delete newUser.password
					console.log('Succefully Update!')
					res.status(200)
					return res.json(newUser).end()
				}
			} catch (e) {
				return handleError(res, 400, e)
			}
		} else {
			return handleError(res, 400, `Type "${type}" doesn't exists`)
		}
	},

	async forgotPass(req, res) {
		const { mail } = req.body
		
		u.get({email:mail},true)
			.then(user => {
				if(!user) return handleError(res, 400, 'bad_request')
				delete user.password
				console.log(user)

				const urlHash = sha1(crypto.randomBytes(4))
				const link = `${process.env.BASE_URL}recover/${urlHash}`

				const subject = 'Recuperação de Senha'
				const body = `
					<h1> Recuperação de Senha do usuário: ${user.name} </h1>
					<p>
						Olá <b>${user.name}</b>, recebemos uma solicitação de mudança de Senha.
						Basta clicar no Botão abaixo, e efetivar a mudança de sua senha.
					</p>
					<br />
					<a href="${link}"> Clique Aqui </a>
					<br />
					<small>OBS: o link expira em 24h.</small>
				`

				const now = mysqlNowFormat()				

				cp.insert({user_id: user.id, hash_url: urlHash, created_at: now}).then( a => {
					mailer.setMailConfigs(mail, subject, body)
					mailer.send().then(send => {
						if (!send) return handleError(res, 400, 'Não foi possível enviar o email\nTente novamente mais tarde')
						return res.json({
							message: 'Email enviado com sucesso',
						}).status(200).end()
					})
				} )
				.catch(e =>{
					handleError(res, 400, e)
				})
			})
			.catch(err => {
				console.log(err)
				return handleError(res, 400, 'Não foi possível enviar o email\nTente novamente mais tarde')
			})
	},
	async changePass(req, res) {
		const { newPass } = req.body //não vem em BASE64!!
		const { url_hash } = req.headers
	
		// const pass = Buffer.from(newPass, 'base64').toString()
		
		const userID = await cp.get({hash_url: url_hash}, true)

		if(userID.status) return handleError(res, 401, 'Senha já atualizada!')

		if(!userID.user_id || userID.user_id === undefined) return handleError(res, 401, 'Não autorizado')

		const user = await u.get({id: userID.user_id}, true)

		if (!user || user === undefined) return handleError(res, 401, 'Não autorizado.')
		let reqTime = dateTimeToISO(userID.created_at)

		const timeDiff = await util.timestampDiff(reqTime)

		if(timeDiff >= 24 ) return handleError(res, 401, 'unauthorized')

		console.log(timeDiff)

		const hashed_pass = await hash(newPass)
	
		const updatedUser = await u.update({id: user.id}, {password: hashed_pass})

		if (!updatedUser === 1) return handleError(res, 400, 'Não foi possível atualizar a senha\nTente novamente mais tarde')

		const currentUser = await u.get({id:user.id}, true)		

		delete currentUser.password

		console.log(updatedUser)

		await cp.update({user_id: currentUser.id}, {status: true})

		return res.json({
			currentUser: currentUser,
			message: 'Senha atualizada com sucesso!',
		})
	},
	async registerUserWork() {
		
	},
}
