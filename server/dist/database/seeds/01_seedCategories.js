'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.seed = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(knex) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return knex('categories').insert([{ title: 'Pedreiro' }, { title: 'Doméstico' }, { title: 'Agricultura' }, { title: 'Animais' }, { title: 'Arquitetura' }, { title: 'Automóveis' }, { title: 'Caridade' }, { title: 'Comida & Bebida' }, { title: 'Comunicações' }, { title: 'Construção & Ferramentas' }, { title: 'Crianças & Cuidados' }, { title: 'Idosos cuidados' }, { title: 'Automóveis' }, { title: 'Educação' }, { title: 'Encontros' }, { title: 'Entretenimento' }, { title: 'Esportes' }, { title: 'Floral' }, { title: 'Fotografia' }, { title: 'Hospital & Farmácia' }, { title: 'Indústrias' }, { title: 'Internet' }, { title: 'Jogos & Recreação' }, { title: 'Limpeza' }, { title: 'Manutenção' }, { title: 'Meio Ambiente' }, { title: 'Moda & Beleza' }, { title: 'Móvis' }, { title: 'Negócios & Consultoria' }, { title: 'Paisagismo' }, { title: 'Política' }, { title: 'Religiosidade' }, { title: 'Serviços de Noiva' }, { title: 'Spa & Estética' }, { title: 'Tecnologia' }, { title: 'Vendas' }, { title: 'Viagens & Hoteis' }]);

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
//# sourceMappingURL=01_seedCategories.js.map