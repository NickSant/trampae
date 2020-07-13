'use strict'

const Joi = require('joi')
const PhoneNumbers = require('google-libphonenumber')

const phoneNumberUtil = PhoneNumbers.PhoneNumberUtil.getInstance()
const PhoneNumberType = PhoneNumbers.PhoneNumberType

module.exports = Joi.extend({
  base: Joi.string(),
  name: 'phone',
  language: {
    mobile: 'needs to be a mobile phone number',
    validate: 'needs to be a valid phone number according to E.164 international format'
  },
  rules: [{
    name: 'mobile',
    validate (params, value, state, options) {
      const phoneNumber = phoneNumberUtil.parse(value, 'FR')
      const isMobile = phoneNumberUtil.getNumberType(phoneNumber) === PhoneNumberType.MOBILE
      if (!isMobile) {
        return this.createError('phone.mobile', { v: value }, state, options)
      }
      return value
    }
  }, {
    name: 'validate',
    validate (params, value, state, options) {
      const phoneNumber = phoneNumberUtil.parse(value, 'FR')
      const isValid = phoneNumberUtil.isValidNumber(phoneNumber)
      if (!isValid) {
        return this.createError('phone.validate', { v: value }, state, options)
      }
      return value
    }
  }]
})
