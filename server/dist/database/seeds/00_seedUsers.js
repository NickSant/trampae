'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _require = require('argon2'),
    hash = _require.hash;

exports.seed = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(knex) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.t0 = knex('users');
                        _context.next = 3;
                        return hash('senha_admin_trampae');

                    case 3:
                        _context.t1 = _context.sent;
                        _context.t2 = {
                            id: '34e4t2',
                            name: 'admano',
                            email: 'adm@a.com',
                            whatsapp: '+5511941002345',
                            city: 'São Bernardo do Campo',
                            uf: 'SP',
                            password: _context.t1
                        };
                        _context.next = 7;
                        return hash('senha_admin_trampae');

                    case 7:
                        _context.t3 = _context.sent;
                        _context.t4 = {
                            id: '34j4f2',
                            name: 'Vini',
                            email: 'viniolimpio3@gmail.com',
                            whatsapp: '+5511941002333',
                            city: 'São Bernardo do Campo',
                            uf: 'SP',
                            password: _context.t3
                        };
                        _context.t5 = [_context.t2, _context.t4];
                        _context.next = 12;
                        return _context.t0.insert.call(_context.t0, _context.t5);

                    case 12:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    function seed(_x) {
        return _ref.apply(this, arguments);
    }

    return seed;
}();
//# sourceMappingURL=00_seedUsers.js.map