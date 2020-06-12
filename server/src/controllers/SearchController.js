import connection from "../database/connection";

export default {
  async SearchByLocation(request, response) {
    const { uf, city } = request.params;

    const services = await connection("services")
      .where("uf", uf)
      .where("city", city)
      .select("*");

    return response.json(services);
  },
  async SearchByCategory(request, response) {
    const { cat_id } = request.params;

    const services = await connection("services")
      .where("id_category", cat_id)
      .select("*");

    return response.json(services);
  },
};
