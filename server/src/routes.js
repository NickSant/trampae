import { Router } from 'express'
import passport from "passport";

import UserController from './controllers/UserController'
import ServiceController from './controllers/ServiceController'
import SearchController from './controllers/SearchController'
import ProfileController from './controllers/ProfileController'

import { validateBody, schemas } from './helpers/validation'
import multer from './helpers/multer'

import authMiddleware from './setup/middlewares/auth'
import mailerAuth from './setup/middlewares/mailer_auth'
import passportConf from "./passport";

const routes = Router()

//SignUp rota
routes.post('/signup', validateBody(schemas.signUpSchema), UserController.create)

//SignIn rota
routes.post('/login', UserController.login)

routes.post('/forgot', ProfileController.forgotPass)
routes.put('/forgot', mailerAuth, ProfileController.changePass)

// GoogleOAuth
routes.post('/oauth/google', passport.authenticate('googleToken', { session: false }), UserController.OAuth)

routes.post('/oauth/facebook', passport.authenticate('facebookToken', { session: false }), UserController.OAuth)

//listar usuários - development - 
routes.get('/user', UserController.index)
//Listar serviços - development
routes.get('/services', ServiceController.index)

//ROTAS EM QUE É NECESSÁRIO AUTH-----------------------------------------------------------------------------

// routes.use(authMiddleware); //authenticator
//pra todas as próximas rotas, o servidor vai passar por esse middleware pra verificar se o token do usuário, passado pelo Bearer da requisição é válido
// logo, em todas preciso passar no header da req, um authorization do tipo Bearer!!!!

routes.get('/me', authMiddleware, (req, res) => res.send(req.auth))
//rota para usar no client, que busca qual usuário foi autenticado. (ver arquivo auth.js)
//de acordo com o bearer token
//esse parâmetro é setado em auth.js


routes.put('/update/:type', authMiddleware, ProfileController.updateData)

//UPLOAD DE IMAGENS - Perfil
//setando middleware multer.js
//as imagens devem ser por um form no insomnia!!
//as configurações da imagens podem ser acessadas no controller com esse nome "img_perfil"
//o name do campo que enviar a imagem, deve ser exatamente igual ao do .single()
routes.post('/upload-image', authMiddleware, multer.single('img_perfil'), ProfileController.uploadImage)

routes.get('/user/:id', authMiddleware, ProfileController.profile)

//searches
routes.get('/search/:uf/:city/:cat_id', authMiddleware, SearchController.SearchServices)
routes.get('/search/:id', authMiddleware, SearchController.SearchUsers)

routes.post('/services', authMiddleware, validateBody(schemas.serviceSchema), ServiceController.create)
routes.delete('/services/:id', authMiddleware, ServiceController.delete)

//404 routes
routes.get('*', (req, res) => {
	res.send(`Cannot found endpoint: ${req.url}`).status(404)
})
routes.post('*', (req, res) => {
	res.send(`Cannot found endpoint: ${req.url}`).status(404)
})
routes.put('*', (req, res) => {
	res.send(`Cannot found endpoint: ${req.url}`).status(404)
})
routes.delete('*', (req, res) => {
	res.send(`Cannot found endpoint: ${req.url}`).status(404)
})

export default routes
