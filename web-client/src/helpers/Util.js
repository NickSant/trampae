import 'dotenv/config'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../services/api'
import { me } from '../contexts/authContext'
import { ValidationError } from 'yup'

class Util{

    static api_base_url(op=false){
        return `${process.env.REACT_APP_HOST_API}:${process.env.REACT_APP_PORT_API}/${op ? op : ''}`
    }
    
    static serverBaseURL(){
        return `${process.env.REACT_APP_HOST_API}:${process.env.REACT_APP_PORT_API}`
    }

    static async isAuthenticated(){        
        if(localStorage.length === 0 ) return false 
        
        const token = localStorage.getItem('@Trampae:token')
        
        if( typeof token === undefined || token === null || token === '') return false

        const localUser = JSON.parse( localStorage.getItem('@Trampae:user') )

        if(!localUser || localUser === '' || typeof localUser !== 'object' || !localUser.id || !localUser.email) return false

        return true
    }
    static async verifyMailHash(urlHash){
        if(!urlHash) return false
        try{
            const response = await api.post('/verfiy-url-hash',{not_middleware:true}, {headers:{url_hash: urlHash}})
            console.log(response,'res')

            return response !== undefined && response !== null && !response.Error ? true : false
            
        }catch( { response } ){
            console.log(response)
            alert(response.data.Error)
            return false
        }

    }

    static getUser(){
        const user = JSON.parse(localStorage.getItem('@Trampae:user'))
        return !user ? false : user;
    }
}
export default Util