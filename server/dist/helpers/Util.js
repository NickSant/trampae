'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('dotenv/config');

var _sha = require('sha1');

var _sha2 = _interopRequireDefault(_sha);

var _connection = require('../database/connection');

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function () {
    function Util() {
        _classCallCheck(this, Util);
    }

    _createClass(Util, [{
        key: 'clearString',
        value: function clearString(original_value) {
            //remove acentos e espaços vazios!
            var removedSpaces = '';
            var mapAcentosHexa = {
                a: /[\xE0-\xE6]/g,
                A: /[\xC0-\xC6]/g,
                e: /[\xE8-\xEB]/g,
                E: /[\xC8-\xCB]/g,
                i: /[\xEC-\xEF]/g,
                I: /[\xCC-\xCF]/g,
                o: /[\xF2-\xF6]/g,
                O: /[\xD2-\xD6]/g,
                u: /[\xF9-\xFC]/g,
                U: /[\xD9-\xDC]/g
            };

            var value_trim = original_value.trim();
            var value_acento = value_trim.toLowerCase();
            var value = value_acento;
            //retirando acentos
            for (var letra in mapAcentosHexa) {
                var regularExpression = mapAcentosHexa[letra];
                value = value.replace(regularExpression, letra);
            }

            for (var i = 0; i < value.length; i++) {
                var letter = value.charAt(i);
                if (letter !== ' ') {
                    removedSpaces += letter;
                }
            }
            console.log(removedSpaces);
            return removedSpaces;
        }
    }, {
        key: 'handleError',
        value: function handleError(res, status, message) {
            console.error(message);
            res.status(status);
            return res.json({ Error: message }).end();
        }
    }, {
        key: 'isAdmin',
        value: function isAdmin(email, password) {
            return email === process.env.ADMIN_USER && (0, _sha2.default)(password) === process.env.ADMIN_PASS ? true : false;
        }
    }, {
        key: 'isAdminID',
        value: function isAdminID(id) {
            return id === process.env.ADMIN_ID_PAYLOAD_JWT ? true : false;
        }
    }, {
        key: 'mysqlNowFormat',
        value: function mysqlNowFormat() {
            var date = new Date();
            date = date.getUTCFullYear() + '-' + ('00' + (date.getUTCMonth() + 1)).slice(-2) + '-' + ('00' + date.getUTCDate()).slice(-2) + ' ' + ('00' + date.getUTCHours()).slice(-2) + ':' + ('00' + date.getUTCMinutes()).slice(-2) + ':' + ('00' + date.getUTCSeconds()).slice(-2);
            return date;
        }
    }, {
        key: 'dateTimeToISO',
        value: function dateTimeToISO(dateTime) {
            dateTime = dateTime.toISOString().replace(/T/, ' ').replace(/\..+/, '');
            return dateTime;
        }
    }, {
        key: 'timestampDiff',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dateTime) {
                var now, query, result, timeDiff;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                now = this.mysqlNowFormat();
                                query = 'select timestampdiff(HOUR, \'' + dateTime + '\', \'' + now + '\');';
                                _context.next = 5;
                                return _connection2.default.raw(query);

                            case 5:
                                result = _context.sent;
                                timeDiff = Object.values(result[0][0])[0];
                                return _context.abrupt('return', timeDiff);

                            case 10:
                                _context.prev = 10;
                                _context.t0 = _context['catch'](0);
                                throw new Error(_context.t0);

                            case 13:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 10]]);
            }));

            function timestampDiff(_x) {
                return _ref.apply(this, arguments);
            }

            return timestampDiff;
        }()
    }]);

    return Util;
}();

exports.default = Util;
//# sourceMappingURL=Util.js.map