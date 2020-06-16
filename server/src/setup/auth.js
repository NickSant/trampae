import * as jwt from './jwt';
import connection from '../database/connection';
module.exports = async function authMiddleware(req, res, next){
    const [hashType, token] = req.headers.authorization.split(' ');//Bearer Authorization

    try{
        console.log(token)
        if(token === undefined){
            res.status(400);
            return res.json({error:'Token Undefined'});
        }
        
        const payload = await jwt.decodeToken(token);//setado no login ou cadastro!!!
        
        console.log('Esse cara existe por enquanto');//pq se conseguir fazer o decode, significa que existe! Se não conseguir, ele cai no catch!
        const id_user = payload.user_id;
        
        console.log(`ID: ${id_user}`);//esse parâmetro user.id é gerado no momento do login ou cadastro!!!

        if(!id_user){
            console.log('VOCÊ NÃO É AUTORIZADO AQUI')
            res.status(401, {error: 'Não autorizado'});
            res.json({Erro:'Unauthorized!'});
        }

 
        const result = await connection('users').select('*').where('id', id_user).first();
        
        console.log('PASSANDO PELO MIDDLEWARE.....');
        
        console.log(`Usuário validado: ${result.name}`);

        delete result.password;//retira o índice password do objeto retornado

        req.auth = result;//setando qual usuário está logado através do auth da requisição

        next();//FUNÇÃO QUE PERMITE ACESSAR AS PRÓXIMAS ROTAS!!
    }catch(err){
        console.log(`ERRO: ${err.name}`)
        res.status(401).send(err.message).toString();
    }
  }
