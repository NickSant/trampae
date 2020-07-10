import express from "express";

import UserController from "./controllers/UserController";
import ServiceController from "./controllers/ServiceController";

import { validateBody, schemas} from "./helpers/validation"
import multer from './multer';

import authMiddleware from "./setup/auth";
import SearchController from "./controllers/SearchController";



const routes = express.Router();

//SignUp rota
routes.post("/user",validateBody(schemas.signUpSchema), UserController.create);

//SignIn rota
routes.get("/login", UserController.login);


//listar usuários - development
routes.get("/user", UserController.index);
//Listar serviços - development
routes.get("/services", ServiceController.index);

//ROTAS EM QUE É NECESSÁRIO AUTH-----------------------------------------------------------------------------

routes.use(authMiddleware); //authenticator
//pra todas as próximas rotas, o servidor vai passar por esse middleware pra verificar se o token do usuário, passado pelo Bearer da requisição é válido
// logo, em todas preciso passar no header da req, um authorization do tipo Bearer!!!!


routes.get("/me", (req, res) => {
  //rota para usar no client, que busca qual usuário foi autenticado. (ver arquivo auth.js)
  //de acordo com o bearer token
  res.send(req.auth); //esse parâmetro é setado em auth.js
});

//UPLOAD DE IMAGENS - Perfil
//setando middleware multer.js
//as imagens devem ser por um form no insomnia!!
//as configurações da imagens podem ser acessadas no controller com esse nome "img_perfil"
//o name do campo que enviar a imagem, deve ser exatamente igual ao do .single()
routes.post('/upload-image', multer.single('img_perfil'), UserController.uploadImage);

routes.get('/profile/:id', UserController.profile);

//searches
routes.get("/search/:uf/:city/:cat_id", SearchController.SearchServices);
routes.get("/search/:name", SearchController.SearchUsers);

routes.post("/services", validateBody(schemas.serviceSchema), ServiceController.create);
routes.delete("/services/:id", ServiceController.delete);

export default routes;
