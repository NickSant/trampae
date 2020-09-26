import db from '../database/connection'
import Util from '../helpers/Util'

class Model{
    constructor(table){
        this.table = table
    }
    async all(){
        if(!this.table) return false
        try{
            const data =  await db(this.table).select('*')
            if(!data || data === undefined || data == '') return false
            return data
        }catch(e){
            throw new Error(e)
        }
    }

    async get(filterItems, isFirst = false){
        if(!this.table) return false
        let data
        try{
            if(isFirst) 
                data = await db(this.table).select('*').where(filterItems).first()
            else
                data = await db(this.table).select('*').where(filterItems)  
            
            if(!data || data === null || data === undefined || data == '') return false

            return data
            
        }catch(e){
            throw new Error(e)
        }
    }

    async insert(data){
        if(!this.table) return false
        try{
            if(!data) throw new Error(`Data is required to insert into '${this.table}'!`)
            const inserted = await db(this.table).insert(data)
            if(!inserted || inserted === undefined || inserted == '') return false

            return true

        }catch(e){
            throw new Error(e)
        }
    }

    async delete(filterItems){
        if(!this.table) return false
        try{
            const deleted = await db(this.table).where(filterItems).delete()
            if(!deleted || deleted === undefined || deleted == '') return false
        }catch(e){
            throw new Error(e)
        }
    }

    async update(filterItems, data){
        if(!this.table) return false
        try{
            const updated = await db(this.table).update(data).where(filterItems)
            if(!updated || updated === undefined || updated == '') return false

        }catch(e){
            throw new Error(e)
        }
    }
}
export default Model;