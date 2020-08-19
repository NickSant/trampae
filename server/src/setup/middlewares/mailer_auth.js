import * as jwt from '../jwt';
import connection from '../../database/connection';
import Util from '../../helpers/Util';

const {handleError} = new Util;

module.exports = async function mailerAuth(req, res, next){
    const [hashType, token] = req.headers.mail_auth.split(' ');//Bearer authorization

    try{
        console.log(token);

        console.log('Mailer Middleware..');
        if(!token || token === undefined) return handleError(res, 401, 'Undefined Token');
        
        const payload = await jwt.decodeToken(token);

        const mail_user_id = payload.mail_user_id;

        console.log(`user ID: ${mail_user_id}`);

        if(!mail_user_id || mail_user_id === undefined) return handleError(res, 401, 'Unauthorized!');

        const user = await connection('users').select('*').where({id: mail_user_id}).first();
        delete user.password;

        console.log(`Usuário existe: ${user.name}`);
        
        req.mail_auth = user;
        next();

    }catch(e){
        return handleError(res, 401, 'Não autorizado.');
    }
}