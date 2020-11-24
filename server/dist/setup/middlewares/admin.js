'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _jwt = require('../jwt');

var jwt = _interopRequireWildcard(_jwt);

var _connection = require('../../database/connection');

var _connection2 = _interopRequireDefault(_connection);

var _Util = require('../../helpers/Util');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _ref = new _Util2.default(),
    handleError = _ref.handleError,
    isAdminID = _ref.isAdminID;

module.exports = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var _req$headers$authoriz, _req$headers$authoriz2, hashType, token, payload, admin_id;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        if (!req.headers.authorization) handleError(res, 401, 'Não autorizado');
                        _req$headers$authoriz = req.headers.authorization.split(' '), _req$headers$authoriz2 = _slicedToArray(_req$headers$authoriz, 2), hashType = _req$headers$authoriz2[0], token = _req$headers$authoriz2[1]; //Bearer Authorization

                        _context.prev = 2;

                        console.log('PASSANDO PELO MIDDLEWARE.....');
                        console.log(token);

                        if (!(token === undefined || !token)) {
                            _context.next = 7;
                            break;
                        }

                        return _context.abrupt('return', handleError(res, 401, 'Token não definido'));

                    case 7:
                        _context.next = 9;
                        return jwt.decodeToken(token);

                    case 9:
                        payload = _context.sent;
                        //setado no login ou cadastro!!!

                        console.log('Admin existe por enquanto'); //pq se conseguir fazer o decode, significa que existe! Se não conseguir, ele cai no catch!

                        admin_id = payload.admin_id;


                        console.log('id', admin_id);

                        if (admin_id) {
                            _context.next = 15;
                            break;
                        }

                        return _context.abrupt('return', handleError(res, 401, 'Não autorizado!'));

                    case 15:
                        if (isAdminID(admin_id)) {
                            _context.next = 17;
                            break;
                        }

                        return _context.abrupt('return', handleError(res, 401, 'Não autorizado'));

                    case 17:

                        req.headers.isAdmin = true;

                        next(); //FUNÇÃO QUE PERMITE ACESSAR AS PRÓXIMAS ROTAS!!
                        _context.next = 24;
                        break;

                    case 21:
                        _context.prev = 21;
                        _context.t0 = _context['catch'](2);
                        return _context.abrupt('return', handleError(res, 401, '(auth.js)\nERR NAME: ' + _context.t0.name + '\nERR MESSAGE: ' + _context.t0.message));

                    case 24:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[2, 21]]);
    }));

    function adminMiddleware(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
    }

    return adminMiddleware;
}();
//# sourceMappingURL=admin.js.map