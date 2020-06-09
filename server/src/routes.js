import express from 'express';

const routes = express.Router();

import knex from './database/connection';

routes.get('/', async (request, response) =>{
    const teste = await knex('user').select('*');
    
    return response.json(response.json(teste));
});

export default routes;