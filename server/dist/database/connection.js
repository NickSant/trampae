'use strict';

var tryMysqlConnection = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var con;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        console.log(dbConnection, 'dbConnection');
                        con = mysql.createConnection(dbConnection);

                        con.connect(function (err) {
                            if (err) throw err;
                        });

                    case 3:
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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var knex = require('knex');
var mysql = require('mysql');
require('dotenv').config();

var dbConnection = {
    host: process.env.DB_HOST,
    user: process.env.USER_DB,
    password: process.env.PASS_DB,
    database: process.env.DATABASE
};

var connection = knex({
    client: 'mysql',
    version: process.env.DB_VERSION, //OBS -> Versão no package.json!!
    connection: dbConnection
});

module.exports = {
    connection: connection,
    tryMysqlConnection: tryMysqlConnection,
    dbConnection: dbConnection
};
//# sourceMappingURL=connection.js.map