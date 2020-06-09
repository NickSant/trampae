//import connection from "./database/connection";

export default {
  async create(request, response) {
    const { title, description, user_id, value, category } = request.headers;

    const user_id = request.headers.authorization;

    const [id] = await connection("services").insert({
      title,
      description,
      value,
      user_id,
    });
  },
};
