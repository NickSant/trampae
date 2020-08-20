require('dotenv/config');
class Util{
    constructor(){
        this.authStatus = false;
    }

    isAuthenticated(type){
        /* console.log(this.auth)
        switch(type){
            case 'token':
                if( typeof localStorage.getItem(process.env.REACT_APP_TOKEN_KEY) !== undefined) this.authStatus = true;
                break;
            case 'mail':
                if( typeof localStorage.getItem(process.env.REACT_APP_TOKEN_MAIL) !== undefined) this.authStatus = true;
                break;
        } */

        return true;
    }
}
export default Util;