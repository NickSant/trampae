/* global describe, it */
const Joi = require('joi')
const phoneRule = require('../lib/phone_validator')

describe('Joi custom phone validation', function() {
  it('phone rule must validate only valid phone numbers', function(done) {
    const schema = phoneRule.phone().validate()
    const validation = Joi.validate('0123456789', schema)
    if (validation.error) {
      return done(validation.error)
    }
    done()
  })

  it('phone rule must not validate invalid phone numbers with fake prefix',function(done) {
    const schema = phoneRule.phone().validate()
    const validation = Joi.validate('0000123456789', schema)
    if (validation.error) {
      return done()
    }
    done('Invalid phone number has been validated incorrectly')
  })

  it('phone rule must validate only mobile numbers', function(done) {
    const schema = phoneRule.phone().mobile()
    const validation = Joi.validate('0601020304', schema)
    if (validation.error) {
      return done(validation.error)
    }
    done()
  })

  it('phone rule must not validate fixed line numbers',function(done) {
    const schema = phoneRule.phone().mobile()
    const validation = Joi.validate('0101020304', schema)
    if (validation.error) {
      return done()
    }
    done('Fixed line number has been validated incorrectly')
  })
})
