import crypto from "crypto";

import connection from "../database/connection";

import * as jwt from "../setup/jwt";

import argon2 from "argon2"; //algoritmo de hash
import fs from 'fs';

import { profile } from "console";
import Util from "../helpers/Util";

const util = new Util();

export default {
  //list users
  async index(request, response) {

    const { page = 1 } = request.query;

    const user = await connection('users')
    .select("*")
    .limit(12)
    .offset( (page - 1) * 12);

    const res_user = user.map( item => {
      //deletando senha do objeto de retornos
      delete item.password;
      return item;
    });
    
    
    return response.json(res_user);
  },
  //create user
  async create(request, response) {
    const { name, email, whatsapp, city, uf, password } = request.value.body;
    const hashed_pass = await argon2.hash(password);

    const data = request.value.body;
    delete data.password;

    const id = await crypto.randomBytes(4).toString("HEX");

    const token = await jwt.generateToken({ user_id: id });//gerando token para auth

    try{
      await connection("users").insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
        password: hashed_pass,
      });

      console.log(data);
    }catch(e){
      console.log(e.sqlMessage);
      if(e.sqlMessage.includes('users_email_unique')){

        response.status(406);
        return response.json({err:'Duplicated email'})

      }else if(e.sqlMessage.includes('users_whatsapp_unique')){

        response.status(406);
        return response.json({err:'Duplicated Whatsapp'});

      }
      console.log(e)
      return response.json({Error:`Database Error: ${e}`})
    }
      
    return response.json({ id, token });
  },

  async login(req, res) {
    const [hashTyp, hash] = req.headers.authorization.split(" "); //Basic Authenticate. Formato: Basic HASH
    const [email, password] = Buffer.from(hash, "base64").toString().split(":"); //Buffer - descriptografa um hash -> separado por :
    //Tudo isso vindo dos headers! Pra não deixar exposto (plain-text) no header, os dados que o usuário envia
    console.log('inicio de login');
    try {
      if (
        !email.includes("@") ||
        !email.includes(".") ||
        email.includes(" ") ||
        !password ||
        password === "" ||
        password === null
      ) {
        res.status(401, { error: "Malformated Elements" });
        return res.json({ Error: "Malformated Elements" });
      }
      console.log('passou validação')
      
      const result = await connection("users")
      .select("*")
      .where("email", email)
      .first();

      console.log(result)

      if(!result || result === undefined){
        return res.status(400).json({Error:'User not found'})
      }
      const pass_bd = await Buffer.from(result.password, "base64").toString(); //DECODIFICANDO HASH DO PRÓPRIO MYSQL!!! - também é do tipo buffer!

      console.log('decodificou buffer');

      //argon2.verify (HASHED_PASS, plainTextPassword)
      if (!(await argon2.verify(pass_bd, password))){
        console.log("senhas diferentes");
        res.status(400);
        return res.json({Error:'Senhas Incorreta'});
      }
        

      if (email !== result.email || !(await argon2.verify(pass_bd, password))) {
        res.status(401, { error: "Incorrect username or password" });
        return res.json({ Error: "Incorret username or password" });
      }

      if (result === undefined) {
        res.status(401, { error: "Operation not permited!" });
        return res.json({ Error: "Unauthorized" });
      }

      const token = await jwt.generateToken({ user_id: result.id });

      console.log("Logou!", `Usuário: ${result.name}`);

      const user = {
        name: result.name,
        email: result.email,
        id: result.id,
      };

      res.json({ user: user, token: token });

    } catch (err) {
      console.log('Deu pau..');
      res.status(401, { error: err });

    }
  },

  async profile(req, res){
    
    const { id } = req.params;
    
    const { id:req_id } = req.auth;//id do user autenticado e logado
    
    const exists = await connection('users').select('*')
    .where('id',id)
    .first();

    if(!exists || exists === undefined || exists === '') {
      console.log(`User ${id} not exists`);
      res.status(401, { error: "User not Found" });
      return res.json({ Error: "User not Found" });
    }
    delete exists.password;
      

    if(id === req_id){
      //ĺógica para a possibilidade de editar os dados!!
      console.log('USER ENTROU NO PRÓPRIO PERFIL');


    }else{
      //dados são somente visíveis ao user 'requisitante'
      console.log('USER ENTROU NO PERFIL DE OUTRO');

    }
    
    
    return res.json(exists);
    


  },
  async uploadImage(req, res){
    console.log('uploadController')
    try{      
      const [,tipoImg] = req.file.mimetype.split('/');
      
      const { name:original_name, id } = req.auth;
      if(!id || id === undefined || id === '')  
        return res.json({Error:'User not valid'})
      
      if(req.file === undefined || !req.file)
        return res.json({Error:'Archive not exists'});
      

      const name_user = util.clearString(original_name);
      console.log(name_user);
      



      fs.rename(`./uploads/${req.file.originalname}`,//nome antigo
        `./uploads/${name_user}-${id}.${tipoImg}`, //novo nome
        (err) =>{//catch
          if(err){
              console.error(err);
              res.status(400);
              return res.json({Error:'Erro'});
          }
          console.log('Arquivo renomeado')
        }
      );
      //NOME_USER-ID_USER.TIPO
      req.file.originalname = `${name_user}-${id}.${tipoImg}`;
      req.file.filename = `${name_user}-${id}.${tipoImg}`;
      //caminho da imagem
      req.file.path = `uploads/${req.file.filename}`;
      
      await connection('users').update({
        image_url: req.file.path
      }).where('id',id);
      console.log('inseriu path image no banco');

      return res.json({image: req.file});

    }catch(e){
      console.log(e);
      res.status(400);
      return res.json({Error:e})
    }

  },


  
};
