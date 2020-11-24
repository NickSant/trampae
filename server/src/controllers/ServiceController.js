import {connection} from '../database/connection'
import crypto from 'crypto'
const db = connection
import * as jwt from '../setup/jwt'

import Util from '../helpers/Util'
import Model from '../models/Model'

const { handleError } = new Util()

const sv = new Model('services')

const servicesJoinUsers = Array(
	'u.id as user_id',
	'u.name as user_name',
	'u.image_url as user_image',
	'u.city as user_city',
	'u.uf as user_uf',
	'u.whatsapp as user_whatsapp',
	's.*' 
)


export default {
	async index(request, response) {
		//valor default de paginação -> page = 1
		const { page = 1 } = request.query

		try {
			const [count] = await db('services').count() //retorna um array com a quantidade de services

			console.log(`Total de services cadastrados: ${count['count(*)']}`)
			
			const services = await db( db.ref('services').as('s') ).select(servicesJoinUsers)
			.limit(12).offset((page - 1) * 12)
			.innerJoin(db.ref('users').as('u'), 'u.id', '=', 's.user_id')

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
		const { field, newValue } = req.body

		try {
			
			if(!field || !newValue) return handleError(res, 400, 'Campo ou novo valor não passado!')
	
			const service = await sv.get({id, user_id}, true)

			if(!service || service.length <= 0 || !service.id ) return handleError(res, 400, `Não foi possível editar o serviço.`)

			sv.update({ id: service.id }, { [field]: newValue })

			return res.json({message: 'Serviço atualizado com sucesso!'}).end()
			
		} catch (error) {
			return handleError(res, 400, error)
		}
	}
}

export {
	servicesJoinUsers
}