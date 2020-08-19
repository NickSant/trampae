import connection from "../database/connection";
import crypto from "crypto";

import * as jwt from "../setup/jwt";

import Util from '../helpers/Util';

const {handleError} = new Util;

export default {
  async index(request, response) {
    //valor default de paginação -> page = 1
    const { page = 1 } = request.query;

    try{

      const [count] = await connection('services').count();//retorna um array com a quantidade de services

      console.log(`Total de services cadastrados: ${count['count(*)']}`);

      const services = await connection("services")
      .select("*")
      .limit(12)
      .offset((page - 1) * 12);//pula as páginas retornadas, em função da query
      
      return response.json(services);

    }catch(e){
      return handleError(response, 400, `Database Error: ${e}`);
    }

  },
  async delete(request, response) {
    const { id } = request.params;
    const { id:user_id } = request.auth;//NÃO ESQUECER DE PASSAR ESSE PARAM NO HEADER
    try{
      const service = await connection("services")
        .where("id", id)
        .select("user_id")
        .first();
        
    }catch(e){
      response.json({db_error: `erro: ${e}`});
    }
      
    if (service.user_id !== user_id) 
      return handleError(response, 401, 'Unauthorized');    
    try{

      await connection("services")
      .where({
        id:id,
        user_id:user_id
      })
      .delete();
      return response.status(204).send();
    }catch(e){
      return handleError(response, 400, `Delete Service Error: ${e}`);
    }
  },

  async create(request, response) {
    const {
      title,
      description,
      price,
      number_participants,
      id_category,
      city,
      uf,
    } = request.body;

    const data = request.body;
    console.log(data);
    const {id:user_id} = request.auth;
    const id = crypto.randomBytes(4).toString("HEX");
    try{
      await connection("services").insert({
        id,
        title,
        description,
        price,
        number_participants,
        city,
        uf,
        user_id,
        id_category,
      });
    }catch(e){
      return handleError(response, 400, `Create Service Error: ${e}` );
    }
    return response.json({ service_id:id });
  },
};
