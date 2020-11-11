'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _connection = require('../database/connection');

var _connection2 = _interopRequireDefault(_connection);

var _jwt = require('../setup/jwt');

var jwt = _interopRequireWildcard(_jwt);

var _Util = require('../helpers/Util');

var _Util2 = _interopRequireDefault(_Util);

var _mailer = require('../helpers/mailer');

var _mailer2 = _interopRequireDefault(_mailer);

var _argon = require('argon2');

var _argon2 = _interopRequireDefault(_argon);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _sha = require('sha1');

var _sha2 = _interopRequireDefault(_sha);

require('dotenv/config');

var _Model = require('../models/Model');

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //algoritmo de hash


var userDefault = ['id', 'name', 'email', 'whatsapp', 'city', 'uf', 'password', 'total_trampos', 'third_party_id', 'image_url', 'hash_url_to_change_pass', 'req_change_pass_time'];

var _ref = new _Util2.default(),
    handleError = _ref.handleError,
    clearString = _ref.clearString,
    mysqlNowFormat = _ref.mysqlNowFormat,
    dateTimeToISO = _ref.dateTimeToISO;

var util = new _Util2.default();

var mailer = new _mailer2.default();
var u = new _Model2.default('users');

var cp = new _Model2.default('change_pass_occurrences');

exports.default = {
	profile: function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
			var id, req_id, exists;
			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							id = req.params.id;
							req_id = req.auth.id; //id do user autenticado e logado


							_context.next = 4;
							return u.get({ id: id }, true);

						case 4:
							exists = _context.sent;

							if (!(!exists || exists === undefined || exists === '')) {
								_context.next = 7;
								break;
							}

							return _context.abrupt('return', handleError(res, 401, 'User ' + id + ' not exists'));

						case 7:

							delete exists.password;

							if (id === req_id) {
								//ĺógica para a possibilidade de editar os dados!!
								console.log('USER ENTROU NO PRÓPRIO PERFIL');
								exists.changePermission = true;
							} else {
								//dados são somente visíveis ao user 'requisitante'
								console.log('USER ENTROU NO PERFIL DE OUTRO');
								exists.changePermission = false;
							}

							return _context.abrupt('return', res.json(exists));

						case 10:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		function profile(_x, _x2) {
			return _ref2.apply(this, arguments);
		}

		return profile;
	}(),
	uploadImage: function () {
		var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
			var _req$file$mimetype$sp, _req$file$mimetype$sp2, tipoImg, _req$auth, original_name, _id, name_user;

			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.prev = 0;
							_req$file$mimetype$sp = req.file.mimetype.split('/'), _req$file$mimetype$sp2 = _slicedToArray(_req$file$mimetype$sp, 2), tipoImg = _req$file$mimetype$sp2[1];
							_req$auth = req.auth, original_name = _req$auth.name, _id = _req$auth.id;

							if (!(!_id || _id === undefined || _id === '')) {
								_context2.next = 5;
								break;
							}

							return _context2.abrupt('return', handleError(res, 401, 'Operação não permitida'));

						case 5:
							if (!(req.file === undefined || !req.file)) {
								_context2.next = 7;
								break;
							}

							return _context2.abrupt('return', handleError(res, 400, 'Archive Does not exists'));

						case 7:
							name_user = clearString(original_name);

							console.log(name_user);

							_fs2.default.rename('./uploads/' + req.file.originalname, //nome antigo
							'./uploads/' + name_user + '-' + _id + '.' + tipoImg, //novo nome
							function (err) {
								//catch
								if (err) return handleError(res, 400, 'Erro: ' + err);
								console.log('Arquivo renomeado');
							});
							//renomeando arquivo para inserir path no banco
							//NOME_USER-ID_USER.TIPO
							req.file.originalname = name_user + '-' + _id + '.' + tipoImg;
							req.file.filename = name_user + '-' + _id + '.' + tipoImg;
							//caminho da imagem
							req.file.path = 'uploads/' + req.file.filename;

							_context2.next = 15;
							return u.update({ id: _id }, { image_url: req.file.path });

						case 15:
							console.log('inseriu path image no banco');

							return _context2.abrupt('return', res.json({
								image: req.file
							}));

						case 19:
							_context2.prev = 19;
							_context2.t0 = _context2['catch'](0);
							return _context2.abrupt('return', handleError(res, 400, _context2.t0));

						case 22:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this, [[0, 19]]);
		}));

		function uploadImage(_x3, _x4) {
			return _ref3.apply(this, arguments);
		}

		return uploadImage;
	}(),
	updateData: function () {
		var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
			var user_id, newValue, type, typeExists, result, newUser;
			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							user_id = req.auth.id;
							newValue = req.body.newValue;
							type = req.params.type;
							typeExists = false;

							if (!(newValue === undefined || newValue === null || newValue === '')) {
								_context3.next = 6;
								break;
							}

							return _context3.abrupt('return', handleError(res, 400, 'Voc\xEA precisa declarar um Novo valor para ' + type));

						case 6:

							userDefault.filter(function (field) {
								if (field === type) return typeExists = true;
							});
							console.log(typeExists);

							if (!typeExists) {
								_context3.next = 29;
								break;
							}

							_context3.prev = 9;
							_context3.next = 12;
							return u.update({ id: user_id }, _defineProperty({}, type, [newValue]));

						case 12:
							result = _context3.sent;

							console.log(result, 'result');

							if (!(result !== undefined && result !== '')) {
								_context3.next = 22;
								break;
							}

							_context3.next = 17;
							return u.get({ id: id }, true);

						case 17:
							newUser = _context3.sent;


							delete newUser.password;
							console.log('Succefully Update!');
							res.status(200);
							return _context3.abrupt('return', res.json(newUser).end());

						case 22:
							_context3.next = 27;
							break;

						case 24:
							_context3.prev = 24;
							_context3.t0 = _context3['catch'](9);
							return _context3.abrupt('return', handleError(res, 400, _context3.t0));

						case 27:
							_context3.next = 30;
							break;

						case 29:
							return _context3.abrupt('return', handleError(res, 400, 'Type "' + type + '" doesn\'t exists'));

						case 30:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this, [[9, 24]]);
		}));

		function updateData(_x5, _x6) {
			return _ref4.apply(this, arguments);
		}

		return updateData;
	}(),
	forgotPass: function () {
		var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
			var mail;
			return regeneratorRuntime.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							mail = req.body.mail;


							u.get({ email: mail }, true).then(function (user) {
								if (!user) return handleError(res, 400, 'bad_request');
								delete user.password;
								console.log(user);

								var urlHash = (0, _sha2.default)(_crypto2.default.randomBytes(4));
								var link = process.env.BASE_URL + 'recover/' + urlHash;

								var subject = 'Recuperação de Senha';
								var body = '\n\t\t\t\t\t<h1> Recupera\xE7\xE3o de Senha do usu\xE1rio: ' + user.name + ' </h1>\n\t\t\t\t\t<p>\n\t\t\t\t\t\tOl\xE1 <b>' + user.name + '</b>, recebemos uma solicita\xE7\xE3o de mudan\xE7a de Senha.\n\t\t\t\t\t\tBasta clicar no Bot\xE3o abaixo, e efetivar a mudan\xE7a de sua senha.\n\t\t\t\t\t</p>\n\t\t\t\t\t<br />\n\t\t\t\t\t<a href="' + link + '"> Clique Aqui </a>\n\t\t\t\t\t<br />\n\t\t\t\t\t<small>OBS: o link expira em 24h.</small>\n\t\t\t\t';

								var now = mysqlNowFormat();

								cp.insert({ user_id: user.id, hash_url: urlHash, created_at: now }).then(function (a) {
									mailer.setMailConfigs(mail, subject, body);
									mailer.send().then(function (send) {
										if (!send) return handleError(res, 400, 'Não foi possível enviar o email\nTente novamente mais tarde');
										return res.json({
											message: 'Email enviado com sucesso',
											link: link
										}).status(200).end();
									});
								}).catch(function (e) {
									handleError(res, 400, e);
								});
							}).catch(function (err) {
								console.log(err);
								return handleError(res, 400, 'Não foi possível enviar o email\nTente novamente mais tarde');
							});

						case 2:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, this);
		}));

		function forgotPass(_x7, _x8) {
			return _ref5.apply(this, arguments);
		}

		return forgotPass;
	}(),
	changePass: function () {
		var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
			var newPass, url_hash, userID, user, reqTime, timeDiff, hashed_pass, updatedUser, currentUser;
			return regeneratorRuntime.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							newPass = req.body.newPass; //vem em BASE64!!

							url_hash = req.headers.url_hash;

							// const pass = Buffer.from(newPass, 'base64').toString()

							_context5.next = 4;
							return cp.get({ hash_url: url_hash }, true);

						case 4:
							userID = _context5.sent;

							if (!userID.status) {
								_context5.next = 7;
								break;
							}

							return _context5.abrupt('return', handleError(res, 401, 'Senha já atualizada!'));

						case 7:
							if (!(!userID.user_id || userID.user_id === undefined)) {
								_context5.next = 9;
								break;
							}

							return _context5.abrupt('return', handleError(res, 401, 'Não autorizado'));

						case 9:
							_context5.next = 11;
							return u.get({ id: userID.user_id }, true);

						case 11:
							user = _context5.sent;

							if (!(!user || user === undefined)) {
								_context5.next = 14;
								break;
							}

							return _context5.abrupt('return', handleError(res, 401, 'Não autorizado.'));

						case 14:
							reqTime = dateTimeToISO(userID.created_at);
							_context5.next = 17;
							return util.timestampDiff(reqTime);

						case 17:
							timeDiff = _context5.sent;

							if (!(timeDiff >= 24)) {
								_context5.next = 20;
								break;
							}

							return _context5.abrupt('return', handleError(res, 401, 'unauthorized'));

						case 20:

							console.log(timeDiff);

							_context5.next = 23;
							return (0, _argon.hash)(newPass);

						case 23:
							hashed_pass = _context5.sent;
							_context5.next = 26;
							return u.update({ id: user.id }, { password: hashed_pass });

						case 26:
							updatedUser = _context5.sent;

							if (!(!updatedUser === 1)) {
								_context5.next = 29;
								break;
							}

							return _context5.abrupt('return', handleError(res, 400, 'Não foi possível atualizar a senha\nTente novamente mais tarde'));

						case 29:
							_context5.next = 31;
							return u.get({ id: user.id }, true);

						case 31:
							currentUser = _context5.sent;


							delete currentUser.password;

							console.log(updatedUser);

							_context5.next = 36;
							return cp.update({ user_id: currentUser.id }, { status: true });

						case 36:
							return _context5.abrupt('return', res.json({
								currentUser: currentUser,
								message: 'Senha atualizada com sucesso!'
							}));

						case 37:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, this);
		}));

		function changePass(_x9, _x10) {
			return _ref6.apply(this, arguments);
		}

		return changePass;
	}(),
	registerUserWork: function () {
		var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
			return regeneratorRuntime.wrap(function _callee6$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
						case 'end':
							return _context6.stop();
					}
				}
			}, _callee6, this);
		}));

		function registerUserWork() {
			return _ref7.apply(this, arguments);
		}

		return registerUserWork;
	}()
};
//# sourceMappingURL=ProfileController.js.map