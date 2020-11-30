import { connection } from '../database/connection'
import { servicesJoinUsers, sv } from './ServiceController'
import Util from '../helpers/Util'
import Model from '../models/Model'

const { handleError } = new Util()
const u = new Model('users')
const db = connection

function whereBuilder(ctx, obj, alias) {
	//função topzera!! rs
	Object.keys(obj).forEach(function (index) {
		const value = obj[index]
		if (value) ctx.where(`${alias}.${index}`, '=', `${value}`)
	})
}

export default {
	async SearchServices(request, response) {
		const { page = 1 } = request.query
		const { uf, city, category_id, id, status, user_id } = request.query //campos que são permitidos (pela lógica) na query

		const services = await db(db.ref('services').as('s'))
			.select(servicesJoinUsers)
			.where(function () {
				whereBuilder(this, { uf, city, category_id, id, status, user_id }, 's')
			})
			.limit(12)
			.offset((page - 1) * 12)
			.innerJoin(db.ref('users').as('u'), 'u.id', '=', 's.user_id')
			.innerJoin(db.ref('categories').as('c'), 'c.id', '=', 's.category_id')

		return response.json({ services })
	},
	async SearchCompletedServices(request, response) {
		const { id, user_assigned_id, user_requested_id, service_id } = request.query
		try {
			const completedServices = await db(db.ref('completed_services').as('cs'))
			.select('cs.id', 's.*')
			.where(function () {
				whereBuilder(this, { id, user_assigned_id, user_requested_id, service_id }, 'cs')
			})
			.innerJoin(db.ref('services').as('s'), 's.id', '=', 'cs.id')

			return response.json({ completedServices })
		} catch (e) {
			console.log(e)
			return handleError(response, 400, 'Database Error')
		}
	},
	async SearchUsers(request, response) {
		const { id = false, name = false, email = false, city = false, uf = false } = request.query
		try {
			const users = await u.get(function () {
				whereBuilder(this, { id, name, email, city, uf }, 'users')
			})
			users.map(user => delete user.password)
			if (!users || users.length <= 0) return response.json({ message: `Usuário não encontrado!` })

			return response.json({ users })
		} catch (e) {
			console.log(e)
			return handleError(response, 400, 'Database Error')
		}
	},
}
