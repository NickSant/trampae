import crypto from "crypto";

//conncetion file missing
//import connection from "../database/connection.js";

export default {
  //list users
  async index(request, response) {
    const user = await connection("user").select("*");

    return response.json(user);
  },
  //create user
  async create(request, response) {
    const { name, email, whatsapp, cidade, uf } = request.body;

    const id = crypto.randomBytes(4).toString("HEX");


    // DB connection and insert data missing

    
    return response.json({ id });
  },
};
