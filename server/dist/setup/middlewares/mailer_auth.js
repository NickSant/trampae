'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _jwt = require('../jwt');

var jwt = _interopRequireWildcard(_jwt);

var _connection = require('../../database/connection');

var _connection2 = _interopRequireDefault(_connection);

var _Util = require('../../helpers/Util');

var _Util2 = _interopRequireDefault(_Util);

var _Model = require('../../models/Model');

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var u = new _Model2.default('users');
var cp = new _Model2.default('change_pass_occurrences');

var _ref = new _Util2.default(),
    handleError = _ref.handleError;

module.exports = function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
        var url_hash, _req$body$not_middlew, not_middleware, occurence, user;

        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.prev = 0;
                        url_hash = req.headers.url_hash;
                        _req$body$not_middlew = req.body.not_middleware, not_middleware = _req$body$not_middlew === undefined ? false : _req$body$not_middlew;

                        if (!(url_hash === undefined || url_hash === null || (typeof url_hash === 'undefined' ? 'undefined' : _typeof(url_hash)) === undefined)) {
                            _context.next = 5;
                            break;
                        }

                        return _context.abrupt('return', handleError(res, 401, 'incompleted_info'));

                    case 5:
                        _context.next = 7;
                        return cp.get({ hash_url: url_hash }, true);

                    case 7:
                        occurence = _context.sent;

                        if (!(!occurence.user_id || occurence.user_id === undefined)) {
                            _context.next = 10;
                            break;
                        }

                        return _context.abrupt('return', handleError(res, 401, 'unauthorized'));

                    case 10:
                        _context.next = 12;
                        return u.get({ id: occurence.user_id }, true);

                    case 12:
                        user = _context.sent;

                        console.log(user);

                        if (user) {
                            _context.next = 16;
                            break;
                        }

                        return _context.abrupt('return', handleError(res, 401, 'unauthorized'));

                    case 16:

                        delete user.password;
                        req.user = user;

                        if (!not_middleware) {
                            _context.next = 20;
                            break;
                        }

                        return _context.abrupt('return', res.json({ user: user, auth: true }).end());

                    case 20:

                        next();
                        _context.next = 26;
                        break;

                    case 23:
                        _context.prev = 23;
                        _context.t0 = _context['catch'](0);
                        return _context.abrupt('return', handleError(res, 401, 'unauthorized(catch)'));

                    case 26:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this, [[0, 23]]);
    }));

    function mailerAuth(_x, _x2, _x3) {
        return _ref2.apply(this, arguments);
    }

    return mailerAuth;
}();
//# sourceMappingURL=mailer_auth.js.map