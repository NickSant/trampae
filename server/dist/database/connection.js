'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tryMysqlConnection = undefined;

var tryMysqlConnection = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var con;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        con = _mysql2.default.createConnection(dbConnection);

                        con.connect(function (err) {
                            if (err) throw err;
                        });

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function tryMysqlConnection() {
        return _ref.apply(this, arguments);
    };
}();

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

require('dotenv').config();

var dbConnection = {
    host: process.env.HOST,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DATABASE
};

var connection = (0, _knex2.default)({
    client: 'mysql',
    version: process.env.DB_VERSION, //OBS -> Versão no package.json!!
    connection: dbConnection
});

exports.default = connection;
exports.tryMysqlConnection = tryMysqlConnection;
//# sourceMappingURL=connection.js.map