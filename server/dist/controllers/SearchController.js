"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connection = require("../database/connection");

var _Util = require("../helpers/Util");

var _Util2 = _interopRequireDefault(_Util);

var _Model = require("../models/Model");

var _Model2 = _interopRequireDefault(_Model);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _ref = new _Util2.default(),
    handleError = _ref.handleError;

var u = new _Model2.default('users');

exports.default = {
  SearchServices: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, response) {
      var _request$query$page, page, _request$query, uf, city, cat_id, id, searchData, services;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _request$query$page = request.query.page, page = _request$query$page === undefined ? 1 : _request$query$page;
              _request$query = request.query, uf = _request$query.uf, city = _request$query.city, cat_id = _request$query.cat_id, id = _request$query.id;
              searchData = {};


              if (uf) searchData.uf = uf;
              if (city) searchData.city = city;
              if (cat_id) searchData.category_id = cat_id;
              if (id) searchData.id = id;

              _context.next = 9;
              return (0, _connection.connection)("services").where(searchData).select("*").limit(12).offset((page - 1) * 12);

            case 9:
              services = _context.sent;
              return _context.abrupt("return", response.json({ services: services }));

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function SearchServices(_x, _x2) {
      return _ref2.apply(this, arguments);
    }

    return SearchServices;
  }(),
  SearchUsers: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, response) {
      var _request$query2, _request$query2$id, id, _request$query2$name, name, _request$query2$email, email, _request$query2$city, city, _request$query2$uf, uf, dataSearch, users;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _request$query2 = request.query, _request$query2$id = _request$query2.id, id = _request$query2$id === undefined ? false : _request$query2$id, _request$query2$name = _request$query2.name, name = _request$query2$name === undefined ? false : _request$query2$name, _request$query2$email = _request$query2.email, email = _request$query2$email === undefined ? false : _request$query2$email, _request$query2$city = _request$query2.city, city = _request$query2$city === undefined ? false : _request$query2$city, _request$query2$uf = _request$query2.uf, uf = _request$query2$uf === undefined ? false : _request$query2$uf;
              dataSearch = {};
              _context2.prev = 2;

              if (id) dataSearch.id = id;
              if (name) dataSearch.name = name;
              if (email) dataSearch.email = email;
              if (city) dataSearch.city = city;
              if (uf) dataSearch.uf = uf;

              _context2.next = 10;
              return u.get(dataSearch);

            case 10:
              users = _context2.sent;

              users.map(function (user) {
                return delete user.password;
              });

              if (!(!users || users.length <= 0)) {
                _context2.next = 14;
                break;
              }

              return _context2.abrupt("return", response.json({ message: "Usu\xE1rio n\xE3o encontrado!" }));

            case 14:
              return _context2.abrupt("return", response.json({ users: users }));

            case 17:
              _context2.prev = 17;
              _context2.t0 = _context2["catch"](2);

              console.log(_context2.t0);
              return _context2.abrupt("return", handleError(response, 400, 'Database Error'));

            case 21:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[2, 17]]);
    }));

    function SearchUsers(_x3, _x4) {
      return _ref3.apply(this, arguments);
    }

    return SearchUsers;
  }()
};
//# sourceMappingURL=SearchController.js.map