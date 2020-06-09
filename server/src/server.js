import express from 'express';//microframework - controla rotas da aplicação



import routes from './routes';

const app = express();


app.use(express.json());
app.use(express.urlencoded());

app.use(routes);

const port = 3333;

app.listen(port, ()=>{   
    console.log(`Running server at http://localhost:${port}`);
});