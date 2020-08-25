require('dotenv/config')
//os método da classe com o es6, precisam ser estático - está dando pau
//um método estático não precisa da instância de um objeto pra ser usado!!
class Util{

    static isAuthenticated(type){
        this.authStatus = false;
        switch(type){
            case 'token':
                const token = localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)
                if( typeof token !== undefined && token !== null) this.authStatus = true
                break

            case 'mail':
                const mail_token = localStorage.getItem(process.env.REACT_APP_TOKEN_MAIL)
                if( typeof mail_token !== undefined && mail_token !== null) this.authStatus = true
                break
                
            default:
                this.authStatus = false
                break
        } 
        return this.authStatus
    }
}
export default Util