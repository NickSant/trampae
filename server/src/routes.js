import express from "express";
import crypto from "crypto";

import UserController from "./controllers/UserController";
import ServiceController from "./controllers/ServiceController";

import knex from './database/connection';

const routes = express.Router();

//listar usuários
routes.get("/user", UserController.index);
routes.post('/user', UserController.create);



export default routes;
