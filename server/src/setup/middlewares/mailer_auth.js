import * as jwt from '../jwt';
import {connection} from '../../database/connection';
import Util from '../../helpers/Util';


import Model from '../../models/Model'
const u = new Model('users')
const cp = new Model('change_pass_occurrences')

const {handleError} = new Util;

module.exports = async function mailerAuth(req, res, next){
    try{
        const { url_hash } = req.headers
        const { not_middleware=false } = req.body

        if(url_hash === undefined || url_hash === null || typeof url_hash === undefined) return handleError(res,401,'incompleted_info')
        
        
        const occurence = await cp.get({hash_url: url_hash}, true)

        
        if(!occurence.user_id || occurence.user_id === undefined) return handleError(res, 401, 'unauthorized')

        const user = await u.get({id: occurence.user_id}, true)
        console.log(user)

        if(!user) return handleError(res, 401, 'unauthorized')
    
		delete user.password
        req.user = user 

        if(not_middleware) return res.json({user: user, auth:true}).end()

        next()
    }catch(e){
        return handleError(res, 401, 'unauthorized(catch)');
    }
}