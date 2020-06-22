'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); //microframework - controla rotas da aplicação

app.use(_express2.default.json());
app.use(_express2.default.urlencoded());
app.use(_routes2.default);

app.listen(3333, function () {
    console.log('Running server at http://localhost:3333');
});
//# sourceMappingURL=server.js.map