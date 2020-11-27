import { connection } from '../database/connection'
import Util from '../helpers/Util'
import Model from '../models/Model'

const db = connection
const { handleError } = new Util()
const c = new Model('categories')

export default {
    async index(req, res){
        try{
            const [count] = await db('categories').count()
            
            const categories = await db('categories').select('*')

            res.json({categories, count: count['count(*)']})
        }catch(e){
            handleError(res, 400, e)
        }
    }
}