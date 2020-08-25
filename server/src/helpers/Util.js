class Util {
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
}
export default Util;