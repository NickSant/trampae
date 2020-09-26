import 'dotenv/config'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
//os método da classe com o es6, precisam ser estático - está dando pau
//um método estático não precisa da instância de um objeto pra ser usado!!
import api from '../services/api'
import { me } from '../contexts/authContext'
class Util{

    static api_base_url(op=false){
        return `${process.env.REACT_APP_HOST_API}:${process.env.REACT_APP_PORT_API}/${op ? op : ''}`
    }
    
    static serverBaseURL(){
        return `${process.env.REACT_APP_HOST_API}:${process.env.REACT_APP_PORT_API}`
    }

    static isAuthenticated(){        
        if(localStorage.length === 0 ) return false 
        
        const token = localStorage.getItem('@Trampae:token');
        
        if( typeof token !== undefined && token !== null && token !== '') return true
       
        return false
    }
    static async verifyMailHash(urlHash){
        if(!urlHash) return false
        try{
            const response = await api.post('/verfiy-url-hash',{not_middleware:true}, {headers:{url_hash: urlHash}})
            console.log(response,'res')
            if( response !== undefined && response !== null || !response.Error){

                localStorage.setItem(process.env.REACT_APP_IS_AUTH_CHANGE_PASS, response.data.auth)
                this.authStatus = true
            }else{
                this.authStatus = false
            }
        }catch( { response } ){
            console.log(response)
            alert(response.data.Error)
            return false
        }

    }
}
export default Util