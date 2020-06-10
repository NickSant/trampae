import * as jwt from './jwt';
import connection from '../database/connection';
module.exports = async function authMiddleware(req, res, next){
    const [hashType, token] = req.headers.authorization.split(' ');//Bearer Authorization

    try{
        const payload = await jwt.decodeToken(token);//setado no login ou cadastro!!!

        const user = connection('users').select('*').where('id', payload.id).first();
        
        console.log(user);
        res.json(user);
    }catch(err){
        res.send(err)
    }

}