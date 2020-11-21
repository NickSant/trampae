'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _express = require('express');

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _UserController = require('./controllers/UserController');

var _UserController2 = _interopRequireDefault(_UserController);

var _ServiceController = require('./controllers/ServiceController');

var _ServiceController2 = _interopRequireDefault(_ServiceController);

var _SearchController = require('./controllers/SearchController');

var _SearchController2 = _interopRequireDefault(_SearchController);

var _ProfileController = require('./controllers/ProfileController');

var _ProfileController2 = _interopRequireDefault(_ProfileController);

var _AdminController = require('./controllers/AdminController');

var _AdminController2 = _interopRequireDefault(_AdminController);

var _validation = require('./helpers/validation');

var _multer = require('./helpers/multer');

var _multer2 = _interopRequireDefault(_multer);

var _auth = require('./setup/middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

var _mailer_auth = require('./setup/middlewares/mailer_auth');

var _mailer_auth2 = _interopRequireDefault(_mailer_auth);

var _admin = require('./setup/middlewares/admin');

var _admin2 = _interopRequireDefault(_admin);

var _passport3 = require('./passport');

var _passport4 = _interopRequireDefault(_passport3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = (0, _express.Router)();

//SignUp rota
routes.post('/signup', (0, _validation.validateBody)(_validation.schemas.signUpSchema), _UserController2.default.create);

//SignIn rota
routes.post('/login', _UserController2.default.login);

routes.post('/forgot', _ProfileController2.default.forgotPass);
routes.post('/verfiy-url-hash', _mailer_auth2.default);
routes.put('/forgot', _mailer_auth2.default, _ProfileController2.default.changePass);

// GoogleOAuth
routes.post('/oauth/google', _passport2.default.authenticate('googleToken', { session: false }), _UserController2.default.OAuth);

routes.post('/oauth/facebook', _passport2.default.authenticate('facebookToken', { session: false }), _UserController2.default.OAuth);

//listar usuários - development - 
routes.get('/user', _UserController2.default.index);
//Listar serviços - development 
routes.get('/services', _ServiceController2.default.index);

//ROTAS EM QUE É NECESSÁRIO AUTH-----------------------------------------------------------------------------

// routes.use(authMiddleware); //authenticator
//pra todas as próximas rotas, o servidor vai passar por esse middleware pra verificar se o token do usuário, passado pelo Bearer da requisição é válido
// logo, em todas preciso passar no header da req, um authorization do tipo Bearer!!!!

//para INVALIDAR o token: no lado do client!
routes.get('/me', _auth2.default, function (req, res) {
	return res.send(req.auth);
});
//rota para usar no client, que busca qual usuário foi autenticado. (ver arquivo auth.js)
//de acordo com o bearer token
//esse parâmetro é setado em auth.js


routes.put('/update/:type', _auth2.default, _ProfileController2.default.updateData);

//UPLOAD DE IMAGENS - Perfil
//setando middleware multer.js
//as imagens devem ser por um form no insomnia!!
//as configurações da imagens podem ser acessadas no controller com esse nome "img_perfil"
//o name do campo que enviar a imagem, deve ser exatamente igual ao do .single()
routes.post('/upload-image', _auth2.default, _multer2.default.single('img_perfil'), _ProfileController2.default.uploadImage);

routes.get('/user/:id', _auth2.default, _ProfileController2.default.profile);

//searches
routes.get('/search/services', _auth2.default, _SearchController2.default.SearchServices);
routes.get('/search/users', _auth2.default, _SearchController2.default.SearchUsers);

routes.post('/services', _auth2.default, (0, _validation.validateBody)(_validation.schemas.serviceSchema), _ServiceController2.default.create);
routes.delete('/services/:id', _auth2.default, _ServiceController2.default.delete);

routes.put('/services/:id', _auth2.default, _ServiceController2.default.edit);

//rotas admin
routes.get('/isadmin', _admin2.default, function (req, res) {
	return res.json({ isAdmin: req.headers.isAdmin ? true : false });
});

routes.get('/admin/users', _admin2.default, _AdminController2.default.listUsers);
routes.delete('/admin/users', _admin2.default, _AdminController2.default.deleteUser);

routes.get('admin/services', _admin2.default, _AdminController2.default.listServices);
routes.delete('admin/services', _admin2.default, _AdminController2.default.deleteService);

//404 routes
routes.get('*', function (req, res) {
	res.json('Cannot found endpoint: ' + req.url).status(404);
});
routes.post('*', function (req, res) {
	res.json('Cannot found endpoint: ' + req.url).status(404);
});
routes.put('*', function (req, res) {
	res.json('Cannot found endpoint: ' + req.url).status(404);
});
routes.delete('*', function (req, res) {
	res.json('Cannot found endpoint: ' + req.url).status(404);
});

exports.default = routes;
//# sourceMappingURL=routes.js.map