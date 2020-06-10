import express from "express";
import crypto from "crypto";

import UserController from "./controllers/UserController";
import ServiceController from "./controllers/ServiceController";

import connection from "./database/connection";

import authMiddleware from './setup/auth';

const routes = express.Router();

//SignOn rota
routes.post("/user", UserController.create);

//SignIn rota
routes.get('/login', UserController.login);

//ROTAS EM QUE É NECESSÁRIO AUTH
routes.use(authMiddleware); //authenticator

//listar usuários
routes.get("/user", UserController.index);

routes.post("/services", ServiceController.create);
routes.get("/services", ServiceController.index);
routes.delete("/services:id", ServiceController.delete); 


export default routes;
