import crypto from "crypto";

import connection from "../database/connection";

import * as jwt from '../setup/jwt';

import argon2 from 'argon2';//algoritmo de hash


export default {
  //list users
  async index(request, response) {
    const user = await connection("users").select("*");

    return response.json(user);
  },
  //create user
  async create(request, response) {
    const { name, email, whatsapp, city, uf, password} = request.body;

    const hashed_pass = await argon2.hash(password);
   
    const data = request.body;
    data.password = undefined;
    
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

    const hash_pass = await argon2.hash(password);
    try{

      const result = await connection('users').select('*').where('email', email).first();
      console.log(result);

      //falta fazer validação com email e senha! - argon2.verify()

      if(result === undefined){ 
        res.status(401,{error: 'Operation not permited!'});
        res.json({Error:"Unauthorized"})
      }

      const token = await jwt.generateToken({user_id: result.id });
      console.log('a')
      //console.log('chegou', ` Usuário: ${result.name}`);
      console.log('b')

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
