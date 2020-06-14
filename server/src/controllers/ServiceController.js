import connection from "../database/connection";
import crypto from "crypto";

import * as jwt from '../setup/jwt';

export default {
  async index(request, response) {
    const services = await connection("services").select("*");

    return response.json(services);
  },
  async delete(request, response) {

    const { id } = request.params;
    const user_id = request.headers.id_user;

    const service = await connection("services")
      .where("id", id)
      .select("user_id")
      .first();
    
    if (service.user_id != user_id) {
      return response.status(401).json({ error: "Operation not permited" });
    }

      await connection("services").where("id", id).delete();

      return response.status(204).send();
    

    
  },

  
  async create(request, response) {


    const { title, description, price, number_participants, id_category, city, uf } = request.body;

    const data = request.body;
    console.log(data);

    const user_id = request.headers.id_user;
    const id = crypto.randomBytes(4).toString("HEX");

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

    return response.json({ id });
  },
};
