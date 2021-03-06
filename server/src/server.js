import 'core-js/stable'
import 'regenerator-runtime/runtime'

import express from 'express';
import cors from 'cors'
import routes from './routes';
import path from 'path';

import {tryMysqlConnection} from './database/connection';

require('dotenv').config();

const port = process.env.PORT;
const host = process.env.HOST;

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.urlencoded({extended:true}));

app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads')));
//método .static, serve para deixar um link comum com os arquivos utilizados na aplicação (como um param da requisição)
//exemplo: acessar a rota-> http://localhost:3333/uploads/arquivo.extensao - mostra o arquivo
app.use(routes); 

//verificando conexão com banco
app.listen(port,  async function() {  
    tryMysqlConnection().then(function(){
        console.log(`Running serve at http://${host}:${port}`)
    }).catch(e => console.log(e))
});