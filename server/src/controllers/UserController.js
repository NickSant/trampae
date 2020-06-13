import crypto from "crypto";

import connection from "../database/connection";

import * as jwt from '../setup/jwt';

import argon2, { argon2i } from 'argon2';//algoritmo de hash


export default {
  //list users
  async index(request, response) {
    const user = await connection("users").select("*");
    
    return response.json(user);
  },
  //create user
  async create(request, response) {
    const { name, email, whatsapp, city, uf, password} = request.body;

    if( !email.includes('.') || !email.includes('@') || email.includes(' ') || email === ''){
      response.status(200);
      return response.json({Error:'Malformated Email'})
    }

    if(name === '' || name === null || !name || whatsapp === '' || whatsapp === null || !whatsapp || city === '' || city === null || !city || uf === '' || uf === null || !uf || password === '' || password === null || !password ){
      response.status(200);
      return response.json({Error:'Malformated elements'})
    }


    const hashed_pass = await argon2.hash(password);
   
    const data = request.body;
    delete data.password;

    const id = await crypto.randomBytes(4).toString("HEX");

    const token = await jwt.generateToken({user_id: id });

    await connection("users").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
      password: hashed_pass
    });

    console.log(data);

    return response.json({ id , token });
  },
      
  async login(req, res){
    const [hashTyp, hash] = req.headers.authorization.split(' ');//Basic Authenticate. Formato: Basic HASH
    const [email, password] = Buffer.from(hash, 'base64').toString().split(':');//Buffer - descriptografa um hash -> separado por :
    //Tudo isso vindo dos headers! Pra não deixar exposto (plain-text) no header, os dados que o usuário envia

    try{

      if(!email.includes('@') || !email.includes('.') || email.includes(' ') ||!password || password ==='' || password === null ){
        res.status(401, {error:'Malformated Elements'});
        return res.json({ Error:'Malformated Elements' })
      }
      
      
      const result = await connection('users').select('*').where('email', email).first();

      const pass_bd = await Buffer.from(result.password, 'base64').toString();//DECODIFICANDO HASH DO PRÓPRIO MYSQL!!! - também é do tipo buffer!
      

      //argon2.verify (HASHED_PASS, plainTextPassword)
      if( !await argon2.verify(pass_bd, password))  console.log('senhas diferentes')
      
      if(email !== result.email || !await argon2.verify(pass_bd, password) ){
        res.status(401, {error:'Incorrect username or password'});
        return res.json({Error:"Incorret username or password"});
      }
      
      if(result === undefined){ 
        res.status(401,{error: 'Operation not permited!'});
        return res.json({Error:"Unauthorized"})
      }

      const token = await jwt.generateToken({user_id: result.id });

      console.log('Logou!', `Usuário: ${result.name}`);


      const user = {
        name:result.name,
        email:result.email,
        id:result.id
      }

      res.json({user: user , token:token});

    }catch(err){
      res.status(401, {error: 'Database Error'});
    }
    
  }
};
