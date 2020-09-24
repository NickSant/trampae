import 'dotenv/config'
//os método da classe com o es6, precisam ser estático - está dando pau
//um método estático não precisa da instância de um objeto pra ser usado!!
import api from '../services/api'

class Util{

    static async isAuthenticated(type, urlHash=false){
        this.authStatus = false
        switch(type){
            case 'token':
                const token = localStorage.getItem('@Trampae:token');
                if( typeof token !== undefined && token !== null) this.authStatus = true
                break

            case 'mail':
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

                break
                
            default:
                this.authStatus = false
                break
        } 
        return this.authStatus
    }
}
export default Util