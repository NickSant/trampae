import {connection} from '../database/connection'
import * as jwt from '../setup/jwt'
import Util from '../helpers/Util'
import Mailer from '../helpers/mailer'
import argon2, { hash, verify } from 'argon2' //algoritmo de hash
import crypto from 'crypto'
import Model from '../models/Model'

require('dotenv/config')
import AdminController from './AdminController'

const { handleError, clearString, isAdmin } = new Util()

const mailer = new Mailer()

const u = new Model('users')

const userDefault = ['id', 'name', 'email', 'whatsapp', 'city', 'uf', 'password']

export default {
	//list users
	async index(req, res) {
		const { page = 1 } = req.query

		const user = await connection('users')
			.select('*')
			.limit(12)
			.offset((page - 1) * 12)

		const res_user = user.map(item => {
			//deletando senha do objeto de retornos
			delete item.password
			return item
		})

		return res.json(res_user)
	},
	//create user
	async create(req, res) {
		console.log('criando user...')
		const { name, email, whatsapp, image_url, city, uf, password, bio } = req.value.body
		const hashed_pass = await argon2.hash(password)

		const data = req.value.body
		delete data.password

		const id = await crypto.randomBytes(4).toString('HEX')

		const token = await jwt.generateToken({ user_id: id }) //gerando token para auth

		try {
			await connection('users').insert({
				id,
				name,
				email,
				whatsapp,
				image_url,
				city,
				uf,
				bio,
				password: hashed_pass,
			})
			console.log(data)
		} catch (e) {
			if (e.sqlMessage) {
				if (e.sqlMessage.includes('users_email_unique')) {
					return handleError(res, 406, 'Duplicated email')
				} else if (e.sqlMessage.includes('users_whatsapp_unique')) {
					return handleError(res, 406, 'Duplicated Whatsapp')
				}
			}

			return handleError(res, 400, `Database Error: ${e}`)
		}

		return res.json({ id, token })
	},
	async OAuth(req, res) {
		const user_id = req.user[0].id
		const token = await jwt.generateToken({ user_id })
		return res.status(200).json({ token })
	},
	async login(req, res) {
		console.log('login --------------------------------------------------------------')

		const [hashType, hash] = req.headers.authorization.split(' ') //Basic Authenticate. Formato: Basic HASH
		const [email, password] = Buffer.from(hash, 'base64').toString().split(':') //Buffer - descriptografa um hash -> separado por :
		//Tudo isso vindo dos headers! Pra não deixar exposto (plain-text) no header, os dados que o usuário envia

		console.log(email)

		if (!email.includes('@') || !email.includes('.') || email.includes(' ') || !password || password === '' || password === null) return handleError(res, 401, 'Malformated Elements')

		if (isAdmin(email, password)) return AdminController.login(req, res)

		try {
			console.log('passou validação')

			const result = await u.get({ email }, true)

			console.log(result)

			if (!result || result === undefined) return handleError(res, 401, 'User not Found')

			const pass_bd = await Buffer.from(result.password, 'base64').toString() //DECODIFICANDO HASH DO PRÓPRIO MYSQL!!! - também é do tipo base64!
			
			const verified = await verify(pass_bd, password);

			console.log('decodificou buffer', verified)

			if (!(verified)) return handleError(res, 401, 'Senha Incorreta')

			const token = await jwt.generateToken({ user_id: result.id })

			console.log('Logou!', `Usuário: ${result.name}`)

			const user = {
				name: result.name,
				email: result.email,
				id: result.id,
				image_url: result.image_url,
				isAdmin: false,
			}
			res.json({ user: user, token: token })
		} catch (err) {
			return handleError(res, 400, err)
		}
	},
}
