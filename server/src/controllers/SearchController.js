import connection from "../database/connection";

export default {
  async SearchServices(request, response) {
    const { uf, city, cat_id } = request.params;

    const services = await connection("services")
      .where("uf", uf)
      .where("city", city)
      .where("id_category", cat_id)
      .select("*");

    return response.json(services);
  },
  async SearchUsers(request, response) {
    const { name } = request.params;

    const users = await connection("users")
      .where("name", "like", `%${name}%`)
      .select("*");

    return response.json(users);
  },
};
