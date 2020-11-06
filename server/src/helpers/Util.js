import 'dotenv/config'
import sha1 from 'sha1'

import db from '../database/connection'

class Util {
    constructor(){
       
    }
    clearString(original_value){
        //remove acentos e espaços vazios!
        let removedSpaces = '';
        const mapAcentosHexa = {
            a : /[\xE0-\xE6]/g,
            A : /[\xC0-\xC6]/g,
            e : /[\xE8-\xEB]/g,
            E : /[\xC8-\xCB]/g,
            i : /[\xEC-\xEF]/g,
            I : /[\xCC-\xCF]/g,
            o : /[\xF2-\xF6]/g,
            O : /[\xD2-\xD6]/g,
            u : /[\xF9-\xFC]/g,
            U : /[\xD9-\xDC]/g,
        };
        
        const value_trim = original_value.trim();
        const value_acento = value_trim.toLowerCase();
        let value = value_acento;
        //retirando acentos
        for( let letra in mapAcentosHexa ){
            var regularExpression = mapAcentosHexa[letra];
            value = value.replace( regularExpression, letra );
        }

        for(let i=0; i < value.length; i++){
            let letter = value.charAt(i);
            if(letter !== ' '){
                removedSpaces += letter;
            }
        }
        console.log(removedSpaces);
        return removedSpaces;
    }

    handleError(res, status, message){
        console.error(message);
        res.status(status);
        return res.json({Error:message}).end();
    }

    isAdmin(email, password){
        return (email === process.env.ADMIN_USER && sha1(password) === process.env.ADMIN_PASS) ? true : false   
    }

    isAdminID(id){
        return (id === process.env.ADMIN_ID_PAYLOAD_JWT) ? true : false
    }

    mysqlNowFormat(){
        let date = new Date();
        date = date.getUTCFullYear() + '-' +
            ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
            ('00' + date.getUTCDate()).slice(-2) + ' ' + 
            ('00' + date.getUTCHours()).slice(-2) + ':' + 
            ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
            ('00' + date.getUTCSeconds()).slice(-2);
        return date
    }

    dateTimeToISO(dateTime){
        dateTime = dateTime.toISOString().replace(/T/, ' ').replace(/\..+/, '')
        return dateTime
    }

    async timestampDiff(dateTime){
        try{
            const now = this.mysqlNowFormat()
            const query = `select timestampdiff(HOUR, '${dateTime}', '${now}');`
            
            const result = await db.raw(query)
            const timeDiff = Object.values(result[0][0]) [0]
                
            return timeDiff
        }catch(e){
            throw new Error(e)
        }
    }


}
export default Util;