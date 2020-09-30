import Joi from 'joi'
import phoneValidator from 'joi-phone-validator'


module.exports = {
    validateBody: (schema) => {
      return (req, res, next) => {
        const result = Joi.validate(req.body, schema);
        
        if(result.error){return res.status(400).json(result.error)}
        if(!req.value){req.value = {}}

        req.value['body'] = result.value
        next();
      }
    },
    schemas: {
      signInSchema: Joi.object().keys({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required()
      }),
      signUpSchema: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().min(6).required(),
        whatsapp: phoneValidator.phone().mobile().required(),
        city: Joi.string().required(),
        uf: Joi.string().length(2).required()
      }),
      serviceSchema: Joi.object().keys({
        title: Joi.string().max(20).required(),
        description: Joi.string().max(200),
        price: Joi.number().required(),
        number_participants: Joi.number(),
        id_category: Joi.number(),
        city: Joi.string().required(),
        uf: Joi.string().length(2).required()
      })
    } 
}