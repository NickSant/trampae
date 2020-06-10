import connection from "../database/connection";
import crypto from "crypto";

export default {
  async index(request, response) {
    const services = await connection("services").select("*");

    return response.json(services);
  },
  async delete(request, response) {
    const { id } = request.params;
    const user_id = request.headers.authorization;

    const service = await connection("services")
      .where("id", id)
      .select("user_id")
      .first();

    console.log(service);
    
    if ((service.user_id =! user_id)) {
      return response.status(401).json({ error: "Operation not permited" });
    }

    await connection("services").where("id", id).delete();

    return response.status(204).send();
  },
  async create(request, response) {
    const { title, description, price, number_participants } = request.body;

    const data = request.body;
    console.log(data);

    const user_id = request.headers.authorization;
    const id = crypto.randomBytes(4).toString("HEX");

    const id_category = 1; // testing value

    await connection("services").insert({
      id,
      title,
      description,
      price,
      number_participants,
      user_id,
      id_category,
    });

    return response.json({ id });
  },
};
