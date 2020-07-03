import express from 'express';//microframework - controla rotas da aplicação

import routes from './routes';
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(routes); 

const port = process.env.PORT;
const host = process.env.HOST;
app.listen(port, ()=>{   
    console.log(`Running server at http://${host}:${port}`);
});