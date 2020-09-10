import * as jwt from '../jwt';
import connection from '../../database/connection';
import Util from '../../helpers/Util';
import UserModel from '../../models/UserModel';
const User = new UserModel()
const {handleError} = new Util;
import {exit} from 'process'
module.exports = async function mailerAuth(req, res, next){
    try{
        const { url_hash } = req.headers
        console.log(url_hash)
        const user = await User.get({hash_url_to_change_pass: url_hash}, true)
		if(!user) return handleError(res, 401, 'unauthorized')
		delete user.password
        req.user = user
        next()
    }catch(e){
        return handleError(res, 401, 'unauthorized');
    }
}