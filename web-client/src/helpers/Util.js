require('dotenv/config');
class Util{
    constructor(){
        this.authStatus = false;
    }

    isAuthenticated(type){
        switch(type){
            case 'token':
                if( typeof localStorage.getItem(process.env.REACT_APP_TOKEN_MAIL) !== undefined) this.authStatus = true;
                break;
            case 'mail':
                if( typeof localStorage.getItem(process.env.REACT_APP_TOKEN_KEY) !== undefined) this.authStatus = true;
                break;
        }

        return this.authStatus;
    }
}
export default Util;