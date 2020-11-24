import {connection} from "../database/connection";
import Util from '../helpers/Util';
import Model from "../models/Model";
const {handleError} = new Util;
const u = new Model('users')

export default {
  async SearchServices(request, response) {

    const { page = 1 } = request.query;

    const { uf, city, cat_id, id } = request.query;

    const searchData = {}

    if(uf) searchData.uf = uf
    if(city) searchData.city = city
    if(cat_id) searchData.category_id = cat_id
    if(id) searchData.id = id
    

    const services = await connection("services")
      .where(searchData)
      .select("*")
      .limit(12)
      .offset( (page -1) * 12 );

    return response.json({services});
  },
  async SearchUsers(request, response) {    
    const { id=false, name=false, email=false, city=false, uf=false } = request.query
    const dataSearch = {}

    try{
      if(id) dataSearch.id = id
      if(name) dataSearch.name = name
      if(email) dataSearch.email = email
      if(city) dataSearch.city = city
      if(uf) dataSearch.uf = uf

      const users = await u.get(dataSearch)
      users.map(user => delete user.password )
      if(!users || users.length <= 0) return response.json({message:`Usuário não encontrado!`})

      return response.json({users});

    }catch(e){
      console.log(e)
      return handleError(response, 400, 'Database Error')
    }
    
  },

  
};
