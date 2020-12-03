import {connection} from '../database/connection'
import crypto from 'crypto'
const db = connection
import * as jwt from '../setup/jwt'

import Util from '../helpers/Util'
import Model from '../models/Model'
import Knex from 'knex'

const { handleError } = new Util()

const sv = new Model('services')
const u = new Model('users')
const cp = new Model('completed_services')
const servicesJoinUsers = Array(
	'u.id as user_id',
	'u.name as user_name',
	'u.image_url as user_image',
	'u.city as user_city',
	'u.uf as user_uf',
	'u.whatsapp as user_whatsapp',
	's.*',
	'c.title as category_title'
)

export default {
	async index(request, response) {
		//valor default de paginação -> page = 1
		const { page = 1 } = request.query

		try {
			const [count] = await db('services').count().where({status: 0}) //retorna um array com a quantidade de services

			console.log(`Total de services cadastrados: ${count['count(*)']}`)
			
			const services = await db( db.ref('services').as('s') ).select(servicesJoinUsers)
			.limit(12).offset((page - 1) * 12)
			.innerJoin(db.ref('users').as('u'), 'u.id', '=', 's.user_id')
			.innerJoin(db.ref('categories').as('c'), 'c.id', '=', 's.category_id')

			return response.json(services)
		} catch (e) {
			return handleError(response, 400, `Database Error: ${e}`)
		}
	},
	async delete(request, response) {
		const { id } = request.params

		const { id: user_id } = request.auth //param criado no middleware!
		
		
		const service = await sv.get({id}, true)

		if(service.length <= 0) handleError(response, 400, 'Serviço não encontrado')

		

		if (service.user_id !== user_id) return handleError(response, 401, 'unauthorized_to_delete_service')

		try {
			await db('services')
				.where({
					id: id,
					user_id: user_id,
				})
				.delete()
			return response.status(204).json({message: `Serviço deletado com sucesso!`})
		} catch (e) {
			return handleError(response, 400, `Delete Service Error: ${e}`)
		}
	},
	async create(request, response) {
		const { title, description, price, id_category, city, uf } = request.body

		const data = request.body
		console.log(data)
		const { id: user_id } = request.auth
		const id = crypto.randomBytes(4).toString('HEX')
		try {
			await sv.insert({
				id,
				title,
				description,
				price,
				city,
				uf,
				user_id,
				category_id: id_category
			})
		} catch (e) {
			return handleError(response, 400, `Create Service Error: ${e}`)
		}
		return response.json({ service_id: id })
	},

	async edit(req, res){
		const { id } = req.params

		const { id:user_id } = req.auth
		const { title, description, price, id_category, city, uf  } = req.body
		
		try {	
			const service = await sv.get({id, user_id}, true)
			if(!service || service.length <= 0 || !service.id ) return handleError(res, 400, `Não foi possível editar o serviço.`)

			sv.update({ id: service.id }, { title, description, price, city, uf, category_id: id_category })

			return res.json({message: 'Serviço atualizado com sucesso!'}).end()
			
		} catch (error) {
			return handleError(res, 400, error)
		}
	},
	async completeService(req, res){
		const { id: user_requested_id } = req.auth
		const { user_assigned_id, service_id } = req.body

		if(!user_assigned_id || !service_id) return handleError(res, 400, `Dados não suficientes para progredir com a ação.`)

		try {
			if(user_assigned_id === user_requested_id) return handleError(res, 400, 'Você não pode atribuí-lo à si próprio!')
			
			const service = await sv.get({id: service_id}, true)
			if(!service) return handleError(res, 400, `service ID doesn't exists!`)

			const user_assigned = await u.get({id:user_assigned_id}, true)
			if(!user_assigned) return handleError(res, 400, `user ID doesn't exists!`)

			console.log(service)
			if(service.user_id !== user_requested_id) return handleError(res, 401, 'unauthorized_to_perform_this_action')

			await cp.insert({ user_assigned_id, user_requested_id, service_id })

			sv.update({id: service_id},{ status: true })

			res.json({status: true}).status(201)
			
		} catch (error) {
			console.log(error)
			return handleError(res, 400, `Não foi possível terminar a ação!`)
		}
	}
}

export {
	servicesJoinUsers, sv
}