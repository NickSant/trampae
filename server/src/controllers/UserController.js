import crypto from "crypto";

import connection from "../database/connection";

export default {
  //list users
  async index(request, response) {
    const user = await connection("user").select("*");

    return response.json(user);
  },
  //create user
  async create(request, response) {
    const { name, email, whatsapp, city, uf, password } = request.body;
    const data = request.body;

    const user_id = crypto.randomBytes(4).toString("HEX");

    await connection("user").insert({
      user_id,
      name,
      email,
      whatsapp,
      city,
      uf,
      password,
    });

    console.log(data);
    return response.json({ id });
  },
};
