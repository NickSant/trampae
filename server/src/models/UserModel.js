import db from '../database/connection';
import { exit } from 'process'
import Util from '../helpers/Util';
class UserModel{
    constructor(){
        this.users = false;
    }

    async get(filterItems, first=false){//filter -> objeto com os campos do filtro
        try {
            console.log(filterItems)
            if(!first) this.users = await db('users').select('*').where(filterItems);
            if(first) this.users = await db('users').select('*').where(filterItems).first();

            if(typeof this.users === undefined || this.users === null) return false
            console.log(this.users)
            return this.users;
        }catch(e){
            console.log(e);
            return false;
        }    
    }   

    async insert(data){
        let users=false;
        try{
            users = await db('users').insert(data);
            return true;
        }catch(e){
            console.log(e)
            return false;
        }
    }

    async update(data, filterItems){
        let users=false;
        try {
            users = await db('users').update(data).where(filterItems);
            return true
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    async delete(filterItems){
        try{
            users = await db('users').delete().where(filterItems)
            return true
        }catch(e){
            console.log(e)
            return false;
        }
    }


    //admin
    async getAll(){
        let users=false;

        try{
            users = await db('users').select('*')
            users.map(user => delete user.password)
            return users
        }catch(e){
            console.log(e)
            return false;
        }
    }
}

export default UserModel;