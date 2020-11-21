"use strict";

var _passport = require("passport");

var _passport2 = _interopRequireDefault(_passport);

var _crypto = require("crypto");

var _crypto2 = _interopRequireDefault(_crypto);

var _connection = require("./database/connection");

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var GooglePlusTokenStrategy = require("passport-google-plus-token");
var FacebookStrategy = require("passport-facebook-token");

require("dotenv/config");

_passport2.default.use("googleToken", new GooglePlusTokenStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET
}, function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(accessToken, refreshToken, profile, done) {
    var existingUser, id, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return (0, _connection2.default)("users").select("*").where("third_party_id", profile.id);

          case 3:
            existingUser = _context.sent;

            if (!(existingUser.length === 1)) {
              _context.next = 7;
              break;
            }

            done(null, existingUser);
            return _context.abrupt("return");

          case 7:
            id = _crypto2.default.randomBytes(4).toString("HEX");
            _context.next = 10;
            return (0, _connection2.default)("users").insert({
              id: id,
              third_party_id: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
              image_url: profile.photos[0].value
            });

          case 10:
            _context.next = 12;
            return (0, _connection2.default)("users").select("*").where("id", id);

          case 12:
            user = _context.sent;


            done(null, user);
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);

            done(_context.t0, false);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined, [[0, 16]]);
  }));

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}()));

_passport2.default.use("facebookToken", new FacebookStrategy({
  clientID: process.env.FB_CLIENT_ID,
  clientSecret: process.env.FB_CLIENT_SECRET
}, function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(accessToken, refreshToken, profile, done) {
    var existingUser, id, user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;

            console.log(accessToken);
            console.log(profile);
            _context2.next = 5;
            return (0, _connection2.default)("users").select("*").where("third_party_id", profile.id);

          case 5:
            existingUser = _context2.sent;

            if (!(existingUser.length === 1)) {
              _context2.next = 9;
              break;
            }

            done(null, existingUser);
            return _context2.abrupt("return");

          case 9:
            id = _crypto2.default.randomBytes(4).toString("HEX");
            _context2.next = 12;
            return (0, _connection2.default)("users").insert({
              id: id,
              third_party_id: profile.id,
              name: profile.displayName,
              email: profile.emails[0].value,
              image_url: profile.photos[0].value
            });

          case 12:
            _context2.next = 14;
            return (0, _connection2.default)("users").select("*").where("id", id);

          case 14:
            user = _context2.sent;


            done(null, user);
            _context2.next = 21;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](0);

            done(_context2.t0, false);

          case 21:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 18]]);
  }));

  return function (_x5, _x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}()));
//# sourceMappingURL=passport.js.map