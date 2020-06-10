//import connection from "./database/connection";

export default {
  async create(request, response) {
    const { title, description, user_id, value, category } = request.headers;

    const user_id = request.headers.authorization;

    await connection("services").insert({
      title,
      description,
      value,
    });
  },
};
