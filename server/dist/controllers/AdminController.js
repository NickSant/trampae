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

var _Model = require('../models/Model');

var _Model2 = _interopRequireDefault(_Model);

var _fs = require('fs');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } //algoritmo de hash


var _ref = new _Util2.default(),
    handleError = _ref.handleError,
    clearString = _ref.clearString,
    isAdmin = _ref.isAdmin;

var mailer = new _mailer2.default();

var u = new _Model2.default('users');
var s = new _Model2.default('services');

exports.default = {
    login: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
            var _req$headers$authoriz, _req$headers$authoriz2, hashTyp, _hash, _Buffer$from$toString, _Buffer$from$toString2, email, password, adminToken;

            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;

                            //confirmando admin
                            _req$headers$authoriz = req.headers.authorization.split(' '), _req$headers$authoriz2 = _slicedToArray(_req$headers$authoriz, 2), hashTyp = _req$headers$authoriz2[0], _hash = _req$headers$authoriz2[1]; //Basic Authenticate. Formato: Basic HASH

                            _Buffer$from$toString = Buffer.from(_hash, 'base64').toString().split(':'), _Buffer$from$toString2 = _slicedToArray(_Buffer$from$toString, 2), email = _Buffer$from$toString2[0], password = _Buffer$from$toString2[1]; //Buffer - descriptografa um hash -> separado por :

                            if (isAdmin(email, password)) {
                                _context.next = 5;
                                break;
                            }

                            return _context.abrupt('return', handleError(res, 401, 'Não autorizado!'));

                        case 5:
                            adminToken = jwt.generateToken({ admin_id: process.env.ADMIN_ID_PAYLOAD_JWT });
                            return _context.abrupt('return', res.json({
                                name: 'Admin',
                                mail: process.env.ADMIN_USER,
                                token_admin: adminToken,
                                isAdmin: true
                            }).end());

                        case 9:
                            _context.prev = 9;
                            _context.t0 = _context['catch'](0);

                            handleError(res, 400, _context.t0);

                        case 12:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this, [[0, 9]]);
        }));

        function login(_x, _x2) {
            return _ref2.apply(this, arguments);
        }

        return login;
    }(),
    listUsers: function () {
        var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
            var all;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return u.all();

                        case 2:
                            all = _context2.sent;
                            return _context2.abrupt('return', res.json(all).end());

                        case 4:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, this);
        }));

        function listUsers(_x3, _x4) {
            return _ref3.apply(this, arguments);
        }

        return listUsers;
    }(),
    deleteUser: function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
            var id, user, deleted;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            id = req.body.id;
                            _context3.next = 3;
                            return u.get({ id: id }, true);

                        case 3:
                            user = _context3.sent;


                            if (!user || user === undefined || user == '' || user.id !== id) handleError(res, 404, 'Usuário não encontrado');

                            _context3.next = 7;
                            return u.delete({ id: id });

                        case 7:
                            deleted = _context3.sent;

                            if (deleted) {
                                _context3.next = 10;
                                break;
                            }

                            return _context3.abrupt('return', handleError(res, 400, 'Não foi possível deletar o usuário'));

                        case 10:
                            return _context3.abrupt('return', res.json({ message: 'Usu\xE1rio ' + user.name + ' deletado com sucesso' }));

                        case 11:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, _callee3, this);
        }));

        function deleteUser(_x5, _x6) {
            return _ref4.apply(this, arguments);
        }

        return deleteUser;
    }(),
    listServices: function () {
        var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, _callee4, this);
        }));

        function listServices(_x7, _x8) {
            return _ref5.apply(this, arguments);
        }

        return listServices;
    }(),
    deleteService: function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, _callee5, this);
        }));

        function deleteService(_x9, _x10) {
            return _ref6.apply(this, arguments);
        }

        return deleteService;
    }()
};
//# sourceMappingURL=AdminController.js.map