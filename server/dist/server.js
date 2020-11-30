'use strict';

require('core-js/stable');

require('regenerator-runtime/runtime');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _connection = require('./database/connection');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('dotenv').config();

var port = process.env.PORT;
var host = process.env.HOST;

var app = (0, _express2.default)();

app.use(_express2.default.json());
app.use((0, _cors2.default)());

app.use(_express2.default.urlencoded({ extended: true }));

app.use('/uploads', _express2.default.static(_path2.default.resolve(__dirname, '..', 'uploads')));
//método .static, serve para deixar um link comum com os arquivos utilizados na aplicação (como um param da requisição)
//exemplo: acessar a rota-> http://localhost:3333/uploads/arquivo.extensao - mostra o arquivo
app.use(_routes2.default);

//verificando conexão com banco
app.listen(port, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    (0, _connection.tryMysqlConnection)().then(function () {
                        console.log('Running serve at http://' + host + ':' + port);
                    }).catch(function (e) {
                        return console.log(e);
                    });

                case 1:
                case 'end':
                    return _context.stop();
            }
        }
    }, _callee, this);
})));
//# sourceMappingURL=server.js.map