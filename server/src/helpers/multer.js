import multer from 'multer';
import path from 'path';//lib nativa
//passando as nossas configurações em um objeto
export default (multer({
    //armazenamento
    storage: multer.diskStorage({
        destination:function(req, file, callback){
            callback(null, 'uploads/');//retorna o destino como sendo a pasta de uploads/
        },
        filename: (req, file, callback) => {
            // Setamos o nome do arquivo que vai ser salvado no segundo paramêtro
            callback(null,file.originalname);
        }
    }),//fim da configuração de storage
    fileFilter: (req, file, callback) =>{
        try{
            //filtrando formatos aceitos
            if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' ){
                console.log('passou pelo multer')
                return callback(null, true);
            }
        
            return callback(null, false);//significa que não aceita o arquivo

        }catch(e){
            console.log(e)
            res.json(e);
        }
            
    }
    
    
    
}));