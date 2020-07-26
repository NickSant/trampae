import connection from "../database/connection";
import Util from '../helpers/Util';
const util = new Util;
export default {
  async SearchServices(request, response) {

    const { page = 1 } = request.query;

    const { uf, city, cat_id } = request.params;

    const services = await connection("services")
      .where("uf", uf)
      .where("city", city)
      .where("id_category", cat_id)
      .select("*")
      .limit(12)
      .offset( (page -1) * 12 );

    return response.json(services);
  },
  async SearchUsers(request, response) {
    const { name } = request.params;
    try{
      const users = await connection("users")
        .where("name", "like", `%${name}%`)
        .select("*");

      return response.json(users);

    }catch(e){
      return util.handleError(response, 400, 'Database Error')
    }
    
  },

  
};
