import connection from "../database/connection";
import * as jwt from "../setup/jwt";
import Util from "../helpers/Util";
import Mailer from '../helpers/mailer';
import argon2, { hash } from "argon2"; //algoritmo de hash
import fs from "fs";
import crypto from "crypto";

const { handleError } = new Util();
const mailer = new Mailer();

const userDefault = [
  "id",
  "name",
  "email",
  "whatsapp",
  "city",
  "uf",
  "password",
];

export default {
  //list users
  async index(request, response) {
    const { page = 1 } = request.query;

    // const { id:user_id } = req.auth; - DEVELOPMENT
    // if(!user_id || user_id === undefined || user_id === '')
    //   handleError(res, 401, 'Unathorized');

    const user = await connection("users")
      .select("*")
      .limit(12)
      .offset((page - 1) * 12);

    const res_user = user.map((item) => {
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

    const token = await jwt.generateToken({ user_id: id }); //gerando token para auth

    try {
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
    } catch (e) {
      console.log(e.sqlMessage);
      if (e.sqlMessage.includes("users_email_unique")) {
        return handleError(res, 406, "Duplicated email");
      } else if (e.sqlMessage.includes("users_whatsapp_unique")) {
        return handleError(res, 406, "Duplicated Whatsapp");
      }
      return handleError(res, 400, `Database Error: ${e}`);
    }

    return response.json({ id, token });
  },
  async OAuth(req, res) {
    const user_id = req.user[0].id;
    const token = await jwt.generateToken({ user_id });
    return res.status(200).json({ token });
  },
  async login(req, res) {
    console.log('início login')
    console.log(req.headers);
    const [hashTyp, hash] = req.headers.authorization.split(" "); //Basic Authenticate. Formato: Basic HASH
    const [email, password] = Buffer.from(hash, "base64").toString().split(":"); //Buffer - descriptografa um hash -> separado por :
    //Tudo isso vindo dos headers! Pra não deixar exposto (plain-text) no header, os dados que o usuário envia

    try {
      if (
        !email.includes("@") ||
        !email.includes(".") ||
        email.includes(" ") ||
        !password ||
        password === "" ||
        password === null
      ) return handleError(res, 401, "Malformated Elements");

      console.log("passou validação");

      const result = await connection("users")
        .select("*")
        .where("email", email)
        .first();

      console.log(result);

      if (!result || result === undefined) return handleError(res, 401, "User not Found");

      const pass_bd = await Buffer.from(result.password, "base64").toString(); //DECODIFICANDO HASH DO PRÓPRIO MYSQL!!! - também é do tipo buffer!

      console.log("decodificou buffer");

      //argon2.verify (HASHED_PASS, plainTextPassword)
      if (!(await argon2.verify(pass_bd, password))) return handleError(res, 401, "Senha Incorreta");

      if (email !== result.email || !(await argon2.verify(pass_bd, password)))
        return handleError(res, 401, "Incorrect username or password");

      if (result === undefined) return handleError(res, 401, "Unauthorized");

      const token = await jwt.generateToken({ user_id: result.id });

      console.log("Logou!", `Usuário: ${result.name}`);

      const user = {
        name: result.name,
        email: result.email,
        id: result.id,
      };
      res.json({ user: user, token: token });
    } catch (err) {
      return handleError(res, 400, err);
    }
  },

  async profile(req, res) {
    const { id } = req.params;

    const { id: req_id } = req.auth; //id do user autenticado e logado

    const exists = await connection("users")
      .select("*")
      .where("id", id)
      .first();

    if (!exists || exists === undefined || exists === "")
      return handleError(res, 401, `User ${id} not exists`);

    delete exists.password;

    if (id === req_id) {
      //ĺógica para a possibilidade de editar os dados!!
      console.log("USER ENTROU NO PRÓPRIO PERFIL");
      exists.changePermission = true;
    } else {
      //dados são somente visíveis ao user 'requisitante'
      console.log("USER ENTROU NO PERFIL DE OUTRO");
      exists.changePermission = false;
    }

    return res.json(exists);
  },
  async uploadImage(req, res) {
    console.log("uploadController");
    try {
      const [, tipoImg] = req.file.mimetype.split("/");

      const { name: original_name, id } = req.auth;
      if (!id || id === undefined || id === "")
        return handleError(res, 401, "Operation not permited");

      if (req.file === undefined || !req.file)
        return handleError(res, 400, "Archive Does not exists");

      const name_user = clearString(original_name);
      console.log(name_user);

      fs.rename(
        `./uploads/${req.file.originalname}`, //nome antigo
        `./uploads/${name_user}-${id}.${tipoImg}`, //novo nome
        (err) => {
          //catch
          if (err) return handleError(res, 400, `Erro: ${err}`);

          console.log("Arquivo renomeado");
        }
      );
      //NOME_USER-ID_USER.TIPO
      req.file.originalname = `${name_user}-${id}.${tipoImg}`;
      req.file.filename = `${name_user}-${id}.${tipoImg}`;
      //caminho da imagem
      req.file.path = `uploads/${req.file.filename}`;

      await connection("users")
        .update({
          image_url: req.file.path,
        })
        .where("id", id);
      console.log("inseriu path image no banco");

      return res.json({ image: req.file });
    } catch (e) {
      return handleError(res, 400, e);
    }
  },
  async updateData(req, res) {
    const { id: user_id } = req.auth;
    const { newValue } = req.body;
    const { type } = req.params;

    let typeExists = false;

    if (newValue === undefined || newValue === null || newValue === "")
      return handleError(res, 400, "New Value is not declared");

    userDefault.filter( field => {
      if (field === type) return (typeExists = true);
    });
    console.log(typeExists);

    if (typeExists) {
      try {
        const result = await connection("users").update(type, newValue).where({
          id: user_id,
        });

        if (result !== undefined && result !== "") {
          const newUser = await connection("users")
            .select("*")
            .where({
              id: user_id,
            })
            .first();

          delete newUser.password;
          console.log("Succefully Update!");
          res.status(200);
          return res.json(newUser);
        }
      } catch (e) {
        return handleError(res, 400, e);
      }
    } else {
      return handleError(res, 400, `Type "${type}" doesn't exists`);
    }
  },

  async forgotPass(req, res){
    const { mail } = req.body;

    connection('users').select('*').where({email:mail}).first()
    .then( user =>{
      delete user.password;
      const subject = "Recuperação de Senha"
      const body = `
        <h1> Recuperação de Senha do usuário: ${user.name} </h1>
        <p>
          Olá <b>${user.name}</b>, recebemos uma solicitação de mudança de Senha.
          Basta clicar no Botão abaixo, e efetivar a mudança de sua senha.
        </p>
        <br />
        <a href="http://localhost:3000/recover"> Clique Aqui </a>
        <br />
        <small>OBS: o link expira em 24h.</small>
      `;
      //OBS - POR ENQUANTO, O LINK DA PÁGINA DE RECUPERAÇÃO, SERÁ ESTÁTICO, DEPOIS PENSAR EM COLOCAR COMO link DINÂMICO!!!!!

      mailer.setMailConfigs(mail, subject, body);
      mailer.send().then( send =>{
        if(!send) return handleError(res, 400, 'Não foi possível enviar o email\nTente novamente mais tarde');
        
        const token = jwt.generateToken({mail_user_id: user.id});//autenticação ->  req.headers.mail_auth!!!!!!!!!!!!!!

        return res.json({
          message:'Email enviado com sucesso', 
          auth_token: token, 
          //no frontend, fazer o mesmo esquema de bearer token, 
          //mas NÃO setar esse token em req.headers.authorization, mas em req.headers.mail_auth!!!!
          link: `http://localhost:3000/recover/`,
        }).status(200).end();

      });

    }).catch(err =>{
      console.log(err);
      return handleError(res, 400, 'Não foi possível enviar o email\nTente novamente mais tarde')
    })

  },

  async changePass(req, res){
    const {mail_auth: auth_user} = req;//setado no middleware mailer
    const { newPass } = req.body;//vem em BASE64!!

    const pass = Buffer.from(newPass).toString();

    const user = await connection('users').select('*')
    .where({ id: auth_user.id }).first();

    if(!user || user === undefined) return handleError(res, 401, 'Não autorizado.');

    const hashed_pass = await argon2.hash(pass);
  
    const updatedUser = await connection('users').update('password', hashed_pass).where({id: user.id});

    if(!updatedUser === 1) return handleError(res, 400, 'Não foi possível atualizar a senha\nTente novamente mais tarde');

    const currentUser = await connection('users').select('*').where({id: user.id}).first();

    delete currentUser.password;
    
    console.log(updatedUser);

    return res.json({currentUser: currentUser, message: 'Senha atualizada com sucesso!'});
  
  },

};