import express from "express";
import crypto from "crypto";

import UserController from "./controllers/UserController";
import ServiceController from "./controllers/ServiceController";

import connection from './database/connection';


const routes = express.Router();

//listar usuários
routes.get('/user', UserController.index);
routes.post('/user', UserController.create);


routes.get('/', async (request, response) =>{
    const teste = await connection('users').select('*');
    
    return response.json(response.json(teste));
});


export default routes;
