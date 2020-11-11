'use strict';

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _joiPhoneValidator = require('joi-phone-validator');

var _joiPhoneValidator2 = _interopRequireDefault(_joiPhoneValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  validateBody: function validateBody(schema) {
    return function (req, res, next) {
      var result = _joi2.default.validate(req.body, schema);

      if (result.error) {
        return res.status(400).json(result.error);
      }
      if (!req.value) {
        req.value = {};
      }

      req.value['body'] = result.value;
      next();
    };
  },
  schemas: {
    signInSchema: _joi2.default.object().keys({
      email: _joi2.default.string().email().required(),
      password: _joi2.default.string().min(6).required()
    }),
    signUpSchema: _joi2.default.object().keys({
      name: _joi2.default.string().required(),
      email: _joi2.default.string().required(),
      password: _joi2.default.string().min(6).required(),
      whatsapp: _joiPhoneValidator2.default.phone().mobile().required(),
      city: _joi2.default.string().required(),
      uf: _joi2.default.string().length(2).required()
    }),
    serviceSchema: _joi2.default.object().keys({
      title: _joi2.default.string().max(20).required(),
      description: _joi2.default.string().max(200),
      price: _joi2.default.number().required(),
      number_participants: _joi2.default.number(),
      id_category: _joi2.default.number(),
      city: _joi2.default.string().required(),
      uf: _joi2.default.string().length(2).required(),
      service_provider_id: _joi2.default.string().default(null)
    })
  }
};
//# sourceMappingURL=validation.js.map