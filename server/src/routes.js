import express from "express";
import crypto from "crypto";

import UserController from "./controllers/UserController";
import ServiceController from "./controllers/ServiceController";

import connection from "./database/connection";

import authMiddleware from './setup/auth';
import SearchController from "./controllers/SearchController";

const routes = express.Router();

//SignUp rota
routes.post("/user", UserController.create);



//SignIn rota
routes.get('/login', UserController.login);

//ROTAS EM QUE É NECESSÁRIO AUTH-----------------------------------------------------------------------------

routes.use(authMiddleware); //authenticator
//pra todas as próximas rotas, o servidor vai passar por esse middleware pra verificar se o token do usuário, passado pelo Bearer da requisição é válido
// logo, em todas preciso passar no header da req, um authorization do tipo Bearer!!!!


routes.get('/me' ,(req, res) =>{
    //rota para usar no client, que busca qual usuário foi autenticado. (ver arquivo auth.js)
    //de acordo com o bearer token
    res.send(req.auth);//esse parâmetro é setado em auth.js
});

//listar usuários - development
routes.get("/user", UserController.index);

//searches
routes.get("/search/:uf/:city/:cat_id", SearchController.SearchServices);
routes.get("/search/:name", SearchController.SearchUsers);

routes.post("/services", ServiceController.create);
routes.get("/services", ServiceController.index);
routes.delete("/services/:id", ServiceController.delete); 


export default routes;
