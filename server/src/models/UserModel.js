import db from '../database/connection';
import Util from '../helpers/Util';
const {handleError} = new Util();
class UserModel{
    constructor(){
        this.users = false;
    }

    async get(filterItems, first=false){//filter -> objeto com os campos do filtro
        try {
            console.log('first', first)
            if(!first) this.users = await db('users').select('*').where(filterItems);
            if(first) this.users = await db('users').select('*').where(filterItems).first();

            return this.users;
        }catch(e){
            console.log(e);
            return false;
        }    
    }   

    async insert(data){
        try{
            this.users = await db('users').insert(data);
            return true;
        }catch(e){
            console.log(e)
            return false;
        }
    }

    async update(data, filterItems){
        try {
            this.users = await db('users').update(data).where(filterItems);
            return true
        } catch (error) {
            console.log(e);
            return false;
        }
    }

    async delete(filterItems){
        try{
            this.users = await db('users').delete().where(filterItems)
        }catch(e){
            console.log(e)
            return false;
        }
    }
}

export default UserModel;