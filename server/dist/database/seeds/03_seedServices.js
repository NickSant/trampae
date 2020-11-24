'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.seed = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(knex) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return knex('services').insert([{ id: '1234', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: '2344', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'e234', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'fg31', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'g2d2', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'd2t4', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'kkk2', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'dfsg', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'df66', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: '6666', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'dflk', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'vkj2', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'fglk', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'dj32', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'dk2e', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: '33ks', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'df4f', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'd44f', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'fjdk', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'df2f', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: '123d', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: '12sd', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: '1df4', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }, { id: 'd3d4', user_id: '34e4t2', title: 'Título monstro', description: 'Descrição teste', price: 1234, category_id: 1, city: 'São Paulo', uf: 'SP', service_provider_id: 1 }]);

                    case 2:
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
//# sourceMappingURL=03_seedServices.js.map