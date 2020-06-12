'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _express2.default.Router();

routes.get('/', function (request, response) {
    return response.json({
        nome: "TRAMPAÊ"
    });
});

exports.default = routes;
//# sourceMappingURL=routes.js.map