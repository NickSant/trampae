import crypto from "crypto";

import connection from "../database/connection";
<<<<<<< HEAD
=======

>>>>>>> 9959a9b5e8008e5bc2192f3268331bfc226462a4
import validator from "../validations/userValidator";

import * as jwt from "../setup/jwt";

import argon2 from "argon2"; //algoritmo de hash

export default {
  //list users
  async index(request, response) {
    const user = await connection("users").select("*");

    return response.json(user);
  },
  //create user
  async create(request, response) {
    const { name, email, whatsapp, city, uf, password } = request.body;

    //validation
    const errors = await validator.checkRegister(request);
    if (!errors.isEmpty()) {
      return response.status(422).json({ errors: errors.array() });
    }

    const hashed_pass = await argon2.hash(password);

    const data = request.body;
    delete data.password;

    const id = await crypto.randomBytes(4).toString("HEX");

<<<<<<< HEAD
    const token = await jwt.generateToken({ user_id: id });

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

=======
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
      
>>>>>>> 9959a9b5e8008e5bc2192f3268331bfc226462a4
    return response.json({ id, token });
  },

  async login(req, res) {
    const [hashTyp, hash] = req.headers.authorization.split(" "); //Basic Authenticate. Formato: Basic HASH
    const [email, password] = Buffer.from(hash, "base64").toString().split(":"); //Buffer - descriptografa um hash -> separado por :
    //Tudo isso vindo dos headers! Pra não deixar exposto (plain-text) no header, os dados que o usuário envia
<<<<<<< HEAD

=======
    console.log('inicio de login');
>>>>>>> 9959a9b5e8008e5bc2192f3268331bfc226462a4
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
<<<<<<< HEAD

      const result = await connection("users")
        .select("*")
        .where("email", email)
        .first();

      const pass_bd = await Buffer.from(result.password, "base64").toString(); //DECODIFICANDO HASH DO PRÓPRIO MYSQL!!! - também é do tipo buffer!

      //argon2.verify (HASHED_PASS, plainTextPassword)
      if (!(await argon2.verify(pass_bd, password)))
        console.log("senhas diferentes");
=======
      console.log('passou validação')
      
      const result = await connection("users")
      .select("*")
      .where("email", email)
      .first();
      console.log(result)
      const pass_bd = await Buffer.from(result.password, "base64").toString(); //DECODIFICANDO HASH DO PRÓPRIO MYSQL!!! - também é do tipo buffer!

      console.log('decodificou buffer');

      //argon2.verify (HASHED_PASS, plainTextPassword)
      if (!(await argon2.verify(pass_bd, password))){
        console.log("senhas diferentes");
        return res.status(401).json({Error: 'Senhas diferentes'});
      }
        
>>>>>>> 9959a9b5e8008e5bc2192f3268331bfc226462a4

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
<<<<<<< HEAD
    } catch (err) {
      res.status(401, { error: "Database Error" });
    }
  },
=======

    } catch (err) {

      res.status(401, { error: err });

    }
  },

  
>>>>>>> 9959a9b5e8008e5bc2192f3268331bfc226462a4
};
