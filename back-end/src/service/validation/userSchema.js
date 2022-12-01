const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'any.required': 'All fields must be filled',
    }),
  password: Joi.string()
    .required()
    .messages({
      'any.required': 'All fields must be filled',
    }),
});

module.exports = {
  loginSchema,
};
