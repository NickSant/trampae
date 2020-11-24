'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _connection = require('../database/connection');

var _jwt = require('../setup/jwt');

var jwt = _interopRequireWildcard(_jwt);

var _Util = require('../helpers/Util');

var _Util2 = _interopRequireDefault(_Util);

var _mailer = require('../helpers/mailer');

var _mailer2 = _interopRequireDefault(_mailer);

var _argon = require('argon2');

var _argon2 = _interopRequireDefault(_argon);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _Model = require('../models/Model');

var _Model2 = _interopRequireDefault(_Model);

var _AdminController = require('./AdminController');

var _AdminController2 = _interopRequireDefault(_AdminController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //algoritmo de hash


require('dotenv/config');

var _ref = new _Util2.default(),
    handleError = _ref.handleError,
    clearString = _ref.clearString,
    isAdmin = _ref.isAdmin;

var mailer = new _mailer2.default();

var u = new _Model2.default('users');

var userDefault = ['id', 'name', 'email', 'whatsapp', 'city', 'uf', 'password'];

exports.default = {
	//list users
	index: function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var _req$query$page, page, user, res_user;

			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_req$query$page = req.query.page, page = _req$query$page === undefined ? 1 : _req$query$page;

							// const { id:user_id } = req.auth; //DEVELOPMENT
							// if(!user_id || user_id === undefined || user_id === '') handleError(res, 401, 'Unathorized')

							_context.next = 3;
							return (0, _connection.connection)('users').select('*').limit(12).offset((page - 1) * 12);

						case 3:
							user = _context.sent;
							res_user = user.map(function (item) {
								//deletando senha do objeto de retornos
								delete item.password;
								return item;
							});
							return _context.abrupt('return', res.json(res_user));

						case 6:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function index(_x, _x2) {
			return _ref2.apply(this, arguments);
		}

		return index;
	}(),

	//create user
	create: function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
			var _req$value$body, name, email, whatsapp, image_url, city, uf, password, hashed_pass, data, id, token;

			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							console.log('criando user...');
							_req$value$body = req.value.body, name = _req$value$body.name, email = _req$value$body.email, whatsapp = _req$value$body.whatsapp, image_url = _req$value$body.image_url, city = _req$value$body.city, uf = _req$value$body.uf, password = _req$value$body.password;
							_context2.next = 4;
							return _argon2.default.hash(password);

						case 4:
							hashed_pass = _context2.sent;
							data = req.value.body;

							delete data.password;

							_context2.next = 9;
							return _crypto2.default.randomBytes(4).toString('HEX');

						case 9:
							id = _context2.sent;
							_context2.next = 12;
							return jwt.generateToken({ user_id: id });

						case 12:
							token = _context2.sent;
							_context2.prev = 13;
							_context2.next = 16;
							return (0, _connection.connection)('users').insert({
								id: id,
								name: name,
								email: email,
								whatsapp: whatsapp,
								image_url: image_url,
								city: city,
								uf: uf,
								password: hashed_pass
							});

						case 16:
							console.log(data);
							_context2.next = 29;
							break;

						case 19:
							_context2.prev = 19;
							_context2.t0 = _context2['catch'](13);

							if (!_context2.t0.sqlMessage) {
								_context2.next = 28;
								break;
							}

							if (!_context2.t0.sqlMessage.includes('users_email_unique')) {
								_context2.next = 26;
								break;
							}

							return _context2.abrupt('return', handleError(res, 406, 'Duplicated email'));

						case 26:
							if (!_context2.t0.sqlMessage.includes('users_whatsapp_unique')) {
								_context2.next = 28;
								break;
							}

							return _context2.abrupt('return', handleError(res, 406, 'Duplicated Whatsapp'));

						case 28:
							return _context2.abrupt('return', handleError(res, 400, 'Database Error: ' + _context2.t0));

						case 29:
							return _context2.abrupt('return', res.json({ id: id, token: token }));

						case 30:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this, [[13, 19]]);
		}));

		function create(_x3, _x4) {
			return _ref3.apply(this, arguments);
		}

		return create;
	}(),
	OAuth: function () {
		var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
			var user_id, token;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							user_id = req.user[0].id;
							_context3.next = 3;
							return jwt.generateToken({ user_id: user_id });

						case 3:
							token = _context3.sent;
							return _context3.abrupt('return', res.status(200).json({ token: token }));

						case 5:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this);
		}));

		function OAuth(_x5, _x6) {
			return _ref4.apply(this, arguments);
		}

		return OAuth;
	}(),
	login: function () {
		var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
			var _req$headers$authoriz, _req$headers$authoriz2, hashTyp, hash, _Buffer$from$toString, _Buffer$from$toString2, email, password, result, pass_bd, verified, token, user;

			return regeneratorRuntime.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							console.log('início login');

							_req$headers$authoriz = req.headers.authorization.split(' '), _req$headers$authoriz2 = _slicedToArray(_req$headers$authoriz, 2), hashTyp = _req$headers$authoriz2[0], hash = _req$headers$authoriz2[1]; //Basic Authenticate. Formato: Basic HASH

							_Buffer$from$toString = Buffer.from(hash, 'base64').toString().split(':'), _Buffer$from$toString2 = _slicedToArray(_Buffer$from$toString, 2), email = _Buffer$from$toString2[0], password = _Buffer$from$toString2[1]; //Buffer - descriptografa um hash -> separado por :
							//Tudo isso vindo dos headers! Pra não deixar exposto (plain-text) no header, os dados que o usuário envia

							console.log(email, password);

							if (!(!email.includes('@') || !email.includes('.') || email.includes(' ') || !password || password === '' || password === null)) {
								_context4.next = 6;
								break;
							}

							return _context4.abrupt('return', handleError(res, 401, 'Malformated Elements'));

						case 6:
							if (!isAdmin(email, password)) {
								_context4.next = 8;
								break;
							}

							return _context4.abrupt('return', _AdminController2.default.login(req, res));

						case 8:
							_context4.prev = 8;

							console.log('passou validação');

							_context4.next = 12;
							return u.get({ email: email }, true);

						case 12:
							result = _context4.sent;


							console.log(result);

							if (!(!result || result === undefined)) {
								_context4.next = 16;
								break;
							}

							return _context4.abrupt('return', handleError(res, 401, 'User not Found'));

						case 16:
							_context4.next = 18;
							return Buffer.from(result.password, 'base64').toString();

						case 18:
							pass_bd = _context4.sent;
							_context4.next = 21;
							return (0, _argon.verify)(pass_bd, password);

						case 21:
							verified = _context4.sent;


							console.log('decodificou buffer', verified);

							if (verified) {
								_context4.next = 25;
								break;
							}

							return _context4.abrupt('return', handleError(res, 401, 'Senha Incorreta'));

						case 25:
							_context4.next = 27;
							return jwt.generateToken({ user_id: result.id });

						case 27:
							token = _context4.sent;


							console.log('Logou!', 'Usu\xE1rio: ' + result.name);

							user = {
								name: result.name,
								email: result.email,
								id: result.id,
								image_url: result.image_url,
								isAdmin: false
							};

							res.json({ user: user, token: token });
							_context4.next = 36;
							break;

						case 33:
							_context4.prev = 33;
							_context4.t0 = _context4['catch'](8);
							return _context4.abrupt('return', handleError(res, 400, _context4.t0));

						case 36:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, this, [[8, 33]]);
		}));

		function login(_x7, _x8) {
			return _ref5.apply(this, arguments);
		}

		return login;
	}()
};
//# sourceMappingURL=UserController.js.map