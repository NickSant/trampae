'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _connection = require('../database/connection');

var _connection2 = _interopRequireDefault(_connection);

var _Util = require('../helpers/Util');

var _Util2 = _interopRequireDefault(_Util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
    function Model(table) {
        _classCallCheck(this, Model);

        this.table = table;
    }

    _createClass(Model, [{
        key: 'all',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (this.table) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt('return', false);

                            case 2:
                                _context.prev = 2;
                                _context.next = 5;
                                return (0, _connection2.default)(this.table).select('*');

                            case 5:
                                data = _context.sent;

                                if (!(!data || data === undefined || data == '')) {
                                    _context.next = 8;
                                    break;
                                }

                                return _context.abrupt('return', false);

                            case 8:
                                return _context.abrupt('return', data);

                            case 11:
                                _context.prev = 11;
                                _context.t0 = _context['catch'](2);
                                throw new Error(_context.t0);

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[2, 11]]);
            }));

            function all() {
                return _ref.apply(this, arguments);
            }

            return all;
        }()
    }, {
        key: 'get',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(filterItems) {
                var isFirst = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var data;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                if (this.table) {
                                    _context2.next = 2;
                                    break;
                                }

                                return _context2.abrupt('return', false);

                            case 2:
                                data = void 0;
                                _context2.prev = 3;

                                if (!isFirst) {
                                    _context2.next = 10;
                                    break;
                                }

                                _context2.next = 7;
                                return (0, _connection2.default)(this.table).select('*').where(filterItems).first();

                            case 7:
                                data = _context2.sent;
                                _context2.next = 13;
                                break;

                            case 10:
                                _context2.next = 12;
                                return (0, _connection2.default)(this.table).select('*').where(filterItems);

                            case 12:
                                data = _context2.sent;

                            case 13:
                                if (!(!data || data === null || data === undefined || data == '')) {
                                    _context2.next = 15;
                                    break;
                                }

                                return _context2.abrupt('return', false);

                            case 15:
                                return _context2.abrupt('return', data);

                            case 18:
                                _context2.prev = 18;
                                _context2.t0 = _context2['catch'](3);
                                throw new Error(_context2.t0);

                            case 21:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[3, 18]]);
            }));

            function get(_x2) {
                return _ref2.apply(this, arguments);
            }

            return get;
        }()
    }, {
        key: 'insert',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(data) {
                var inserted;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (this.table) {
                                    _context3.next = 2;
                                    break;
                                }

                                return _context3.abrupt('return', false);

                            case 2:
                                _context3.prev = 2;

                                if (data) {
                                    _context3.next = 5;
                                    break;
                                }

                                throw new Error('Data is required to insert into \'' + this.table + '\'!');

                            case 5:
                                _context3.next = 7;
                                return (0, _connection2.default)(this.table).insert(data);

                            case 7:
                                inserted = _context3.sent;

                                if (!(!inserted || inserted === undefined || inserted == '')) {
                                    _context3.next = 10;
                                    break;
                                }

                                return _context3.abrupt('return', false);

                            case 10:
                                return _context3.abrupt('return', true);

                            case 13:
                                _context3.prev = 13;
                                _context3.t0 = _context3['catch'](2);
                                throw new Error(_context3.t0);

                            case 16:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[2, 13]]);
            }));

            function insert(_x3) {
                return _ref3.apply(this, arguments);
            }

            return insert;
        }()
    }, {
        key: 'delete',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(filterItems) {
                var deleted;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                if (this.table) {
                                    _context4.next = 2;
                                    break;
                                }

                                return _context4.abrupt('return', false);

                            case 2:
                                _context4.prev = 2;
                                _context4.next = 5;
                                return (0, _connection2.default)(this.table).where(filterItems).delete();

                            case 5:
                                deleted = _context4.sent;

                                if (!(!deleted || deleted === undefined || deleted == '')) {
                                    _context4.next = 8;
                                    break;
                                }

                                return _context4.abrupt('return', false);

                            case 8:
                                _context4.next = 13;
                                break;

                            case 10:
                                _context4.prev = 10;
                                _context4.t0 = _context4['catch'](2);
                                throw new Error(_context4.t0);

                            case 13:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[2, 10]]);
            }));

            function _delete(_x4) {
                return _ref4.apply(this, arguments);
            }

            return _delete;
        }()
    }, {
        key: 'update',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(filterItems, data) {
                var updated;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                if (this.table) {
                                    _context5.next = 2;
                                    break;
                                }

                                return _context5.abrupt('return', false);

                            case 2:
                                _context5.prev = 2;
                                _context5.next = 5;
                                return (0, _connection2.default)(this.table).update(data).where(filterItems);

                            case 5:
                                updated = _context5.sent;

                                if (!(!updated || updated === undefined || updated == '')) {
                                    _context5.next = 8;
                                    break;
                                }

                                return _context5.abrupt('return', false);

                            case 8:
                                _context5.next = 13;
                                break;

                            case 10:
                                _context5.prev = 10;
                                _context5.t0 = _context5['catch'](2);
                                throw new Error(_context5.t0);

                            case 13:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this, [[2, 10]]);
            }));

            function update(_x5, _x6) {
                return _ref5.apply(this, arguments);
            }

            return update;
        }()
    }]);

    return Model;
}();

exports.default = Model;
//# sourceMappingURL=Model.js.map