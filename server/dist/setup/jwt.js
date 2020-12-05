'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateToken = generateToken;
exports.decodeToken = decodeToken;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var secret = process.env.SECRET_JWT;
//payload = dado que vai ser criptografado
function generateToken(payload) {
    return _jsonwebtoken2.default.sign(payload, secret, {
        expiresIn: 28800 //Esse token é válido em até 8 HORAS!!
    });
}
function decodeToken(token) {
    return _jsonwebtoken2.default.verify(token, secret);
}
//# sourceMappingURL=jwt.js.map