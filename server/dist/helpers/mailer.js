'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

require('dotenv/config');

var Mailer = function () {
    function Mailer() {
        _classCallCheck(this, Mailer);

        this.transporter = _nodemailer2.default.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: false,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS
            }
        });

        this.configs = '';
    }

    _createClass(Mailer, [{
        key: 'setMailConfigs',
        value: function setMailConfigs(to, subject, htmlBody) {
            this.configs = {
                from: process.env.MAIL_USER,
                to: to,
                subject: '[Trampa\xEA] - ' + subject,

                html: htmlBody
            };
        }
    }, {
        key: 'send',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var send;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(this.configs === '')) {
                                    _context.next = 2;
                                    break;
                                }

                                throw new Error('Você precisa setar as configurações antes de enviar o email');

                            case 2:
                                _context.next = 4;
                                return this.transporter.sendMail(this.configs);

                            case 4:
                                send = _context.sent;

                                if (!send) {
                                    _context.next = 7;
                                    break;
                                }

                                return _context.abrupt('return', true);

                            case 7:
                                return _context.abrupt('return', false);

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function send() {
                return _ref.apply(this, arguments);
            }

            return send;
        }()
    }]);

    return Mailer;
}();

exports.default = Mailer;
//# sourceMappingURL=mailer.js.map