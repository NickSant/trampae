/** @format */

import connection from '../database/connection'
import * as jwt from '../setup/jwt'
import Util from '../helpers/Util'
import Mailer from '../helpers/mailer'
import argon2, { hash } from 'argon2' //algoritmo de hash
import fs from 'fs'
import crypto from 'crypto'

import UserModel from '../models/UserModel'

const userDefault = ['id', 'name', 'email', 'whatsapp', 'city', 'uf', 'password']

const { handleError, clearString } = new Util()


const mailer = new Mailer()
const user_m = new UserModel()

export default {
	async profile(req, res) {
		const { id } = req.params


		const { id: req_id } = req.auth //id do user autenticado e logado

		const exists = await user_m.get({ id }, true)

		if (!exists || exists === undefined || exists === '') return handleError(res, 401, `User ${id} not exists`)

		delete exists.password

		if (id === req_id) {
			//ĺógica para a possibilidade de editar os dados!!
			console.log('USER ENTROU NO PRÓPRIO PERFIL')
			exists.changePermission = true
		} else {
			//dados são somente visíveis ao user 'requisitante'
			console.log('USER ENTROU NO PERFIL DE OUTRO')
			exists.changePermission = false
		}

		return res.json(exists)
	},
	async uploadImage(req, res) {
		console.log('uploadController')
		try {
			const [, tipoImg] = req.file.mimetype.split('/')

			const { name: original_name, id } = req.auth
			if (!id || id === undefined || id === '') return handleError(res, 401, 'Operation not permited')

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

			await user_m.update({image_url: req.file.path},{ id })

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

		if (newValue === undefined || newValue === null || newValue === '') return handleError(res, 400, 'New Value is not declared')

		userDefault.filter(field => {
			if (field === type) return (typeExists = true)
		})
		console.log(typeExists)

		if (typeExists) {
			try {
				const result = await user_m.update({[type]:[newValue]}, {id: user_id})
				console.log(result, 'result')
				if (result !== undefined && result !== '') {
					const newUser = await user_m.get({ id: user_id }, true)

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

		// connection('users').select('*').where({email:mail}).first()
		user_m.get({ email: mail }, true)
			.then(user => {
				delete user.password
				const subject = 'Recuperação de Senha'
				const body = `
				<h1> Recuperação de Senha do usuário: ${user.name} </h1>
				<p>
					Olá <b>${user.name}</b>, recebemos uma solicitação de mudança de Senha.
					Basta clicar no Botão abaixo, e efetivar a mudança de sua senha.
				</p>
				<br />
				<a href="http://localhost:3000/recover"> Clique Aqui </a>
				<br />
				<small>OBS: o link expira em 24h.</small>
			`
				//OBS - POR ENQUANTO, O LINK DA PÁGINA DE RECUPERAÇÃO, SERÁ ESTÁTICO, DEPOIS PENSAR EM COLOCAR COMO link DINÂMICO!!!!!

				mailer.setMailConfigs(mail, subject, body)
				mailer.send().then(send => {
					if (!send) return handleError(res, 400, 'Não foi possível enviar o email\nTente novamente mais tarde')

					const token = jwt.generateToken({
						mail_user_id: user.id,
					}) //autenticação ->  req.headers.mail_auth!!!!!!!!!!!!!!

					return res.json({
						message: 'Email enviado com sucesso',
						auth_token: token,
						//no frontend, fazer o mesmo esquema de bearer token,
						//mas NÃO setar esse token em req.headers.authorization, mas em req.headers.mail_auth!!!!
						link: `http://localhost:3000/recover/`,
					}).status(200).end()
				})
			})
			.catch(err => {
				console.log(err)
				return handleError(res, 400, 'Não foi possível enviar o email\nTente novamente mais tarde')
			})
	},

	async changePass(req, res) {
		const { mail_auth: auth_user } = req //setado no middleware mailer
		const { newPass } = req.body //vem em BASE64!!

		const pass = Buffer.from(newPass).toString()

		const user = await user_m.get({ id: auth_user.id }, true)

		if (!user || user === undefined) return handleError(res, 401, 'Não autorizado.')

		const hashed_pass = await argon2.hash(pass)

		const updatedUser = await user_m.update({ password: hashed_pass }, { id: user.id })
		// await connection('users').update('password', hashed_pass).where({id: user.id});

		if (!updatedUser === 1) return handleError(res, 400, 'Não foi possível atualizar a senha\nTente novamente mais tarde')

		const currentUser = await user_m.get({ id: user.id }, true)

		delete currentUser.password

		console.log(updatedUser)

		return res.json({
			currentUser: currentUser,
			message: 'Senha atualizada com sucesso!',
		})
	},
}
