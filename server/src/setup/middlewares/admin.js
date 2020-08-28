import * as jwt from '../jwt';
import connection from '../../database/connection';
import Util from '../../helpers/Util';
const {handleError, isAdminID} = new Util();

module.exports = async function adminMiddleware(req, res, next){
    if(!req.headers.authorization) handleError(res, 401, 'Não autorizado')
    const [hashType, token] = req.headers.authorization.split(' ')//Bearer Authorization

    try{
        console.log('PASSANDO PELO MIDDLEWARE.....')
        console.log(token)
        if(token === undefined || !token) return handleError(res, 401, 'Token não definido')
            
        const payload = await jwt.decodeToken(token)//setado no login ou cadastro!!!
        
        console.log('Admin existe por enquanto')//pq se conseguir fazer o decode, significa que existe! Se não conseguir, ele cai no catch!
        
        const admin_id = payload.admin_id
        
        console.log('id', admin_id)
        if(!admin_id) return handleError(res, 401, 'Não autorizado!')

        if( !isAdminID(admin_id) ) return handleError(res, 401, 'Não autorizado')

        req.headers.isAdmin = true

        next()//FUNÇÃO QUE PERMITE ACESSAR AS PRÓXIMAS ROTAS!!
    }catch(err){
        return handleError(res, 401, `(auth.js)\nERR NAME: ${err.name}\nERR MESSAGE: ${err.message}`)
    }
  }
