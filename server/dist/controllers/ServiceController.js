'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _connection = require('../database/connection');

var _connection2 = _interopRequireDefault(_connection);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _jwt = require('../setup/jwt');

var jwt = _interopRequireWildcard(_jwt);

var _Util = require('../helpers/Util');

var _Util2 = _interopRequireDefault(_Util);

var _Model = require('../models/Model');

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _ref = new _Util2.default(),
    handleError = _ref.handleError;

var sv = new _Model2.default('services');

exports.default = {
	index: function () {
		var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response) {
			var _request$query$page, page, _ref3, _ref4, count, services;

			return regeneratorRuntime.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							//valor default de paginação -> page = 1
							_request$query$page = request.query.page, page = _request$query$page === undefined ? 1 : _request$query$page;
							_context.prev = 1;
							_context.next = 4;
							return (0, _connection2.default)('services').count();

						case 4:
							_ref3 = _context.sent;
							_ref4 = _slicedToArray(_ref3, 1);
							count = _ref4[0];
							//retorna um array com a quantidade de services

							console.log('Total de services cadastrados: ' + count['count(*)']);

							_context.next = 10;
							return (0, _connection2.default)('services').select('*').limit(12).offset((page - 1) * 12);

						case 10:
							services = _context.sent;
							return _context.abrupt('return', response.json(services));

						case 14:
							_context.prev = 14;
							_context.t0 = _context['catch'](1);
							return _context.abrupt('return', handleError(response, 400, 'Database Error: ' + _context.t0));

						case 17:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this, [[1, 14]]);
		}));

		function index(_x, _x2) {
			return _ref2.apply(this, arguments);
		}

		return index;
	}(),
	delete: function () {
		var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, response) {
			var id, user_id, service;
			return regeneratorRuntime.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							id = request.params.id;
							user_id = request.auth.id; //param criado no middleware!


							_context2.next = 4;
							return sv.get({ id: id }, true);

						case 4:
							service = _context2.sent;


							if (service.length <= 0) handleError(response, 400, 'Serviço não encontrado');

							if (!(service.user_id !== user_id)) {
								_context2.next = 8;
								break;
							}

							return _context2.abrupt('return', handleError(response, 401, 'unauthorized_to_delete_service'));

						case 8:
							_context2.prev = 8;
							_context2.next = 11;
							return (0, _connection2.default)('services').where({
								id: id,
								user_id: user_id
							}).delete();

						case 11:
							return _context2.abrupt('return', response.status(204).json({ message: 'Servi\xE7o deletado com sucesso!' }));

						case 14:
							_context2.prev = 14;
							_context2.t0 = _context2['catch'](8);
							return _context2.abrupt('return', handleError(response, 400, 'Delete Service Error: ' + _context2.t0));

						case 17:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this, [[8, 14]]);
		}));

		function _delete(_x3, _x4) {
			return _ref5.apply(this, arguments);
		}

		return _delete;
	}(),
	create: function () {
		var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(request, response) {
			var _request$body, title, description, price, id_category, city, uf, data, user_id, id;

			return regeneratorRuntime.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_request$body = request.body, title = _request$body.title, description = _request$body.description, price = _request$body.price, id_category = _request$body.id_category, city = _request$body.city, uf = _request$body.uf;
							data = request.body;

							console.log(data);
							user_id = request.auth.id;
							id = _crypto2.default.randomBytes(4).toString('HEX');
							_context3.prev = 5;
							_context3.next = 8;
							return sv.insert({
								id: id,
								title: title,
								description: description,
								price: price,
								city: city,
								uf: uf,
								user_id: user_id,
								category_id: id_category
							});

						case 8:
							_context3.next = 13;
							break;

						case 10:
							_context3.prev = 10;
							_context3.t0 = _context3['catch'](5);
							return _context3.abrupt('return', handleError(response, 400, 'Create Service Error: ' + _context3.t0));

						case 13:
							return _context3.abrupt('return', response.json({ service_id: id }));

						case 14:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this, [[5, 10]]);
		}));

		function create(_x5, _x6) {
			return _ref6.apply(this, arguments);
		}

		return create;
	}(),
	edit: function () {
		var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
			var id, user_id, _req$body, field, newValue, service;

			return regeneratorRuntime.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							id = req.params.id;
							user_id = req.auth.id;
							_req$body = req.body, field = _req$body.field, newValue = _req$body.newValue;
							_context4.prev = 3;

							if (!(!field || !newValue)) {
								_context4.next = 6;
								break;
							}

							return _context4.abrupt('return', handleError(res, 400, 'Campo ou novo valor não passado!'));

						case 6:
							_context4.next = 8;
							return sv.get({ id: id, user_id: user_id }, true);

						case 8:
							service = _context4.sent;

							if (!(!service || service.length <= 0 || !service.id)) {
								_context4.next = 11;
								break;
							}

							return _context4.abrupt('return', handleError(res, 400, 'N\xE3o foi poss\xEDvel editar o servi\xE7o.'));

						case 11:

							sv.update({ id: service.id }, _defineProperty({}, field, newValue));

							return _context4.abrupt('return', res.json({ message: 'Serviço atualizado com sucesso!' }).end());

						case 15:
							_context4.prev = 15;
							_context4.t0 = _context4['catch'](3);
							return _context4.abrupt('return', handleError(res, 400, _context4.t0));

						case 18:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, this, [[3, 15]]);
		}));

		function edit(_x7, _x8) {
			return _ref7.apply(this, arguments);
		}

		return edit;
	}()
};
//# sourceMappingURL=ServiceController.js.map