const Joi = require('joi');

const ALL_FIELDS_REQUIRED = 'All fields must be filled';

const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'any.required': ALL_FIELDS_REQUIRED,
    }),
  password: Joi.string()
    .required()
    .messages({
      'any.required': ALL_FIELDS_REQUIRED,
    }),
});

const userRegisterSchema = Joi.object({
  name: Joi.string()
    .required()
    .messages({
      'any.required': ALL_FIELDS_REQUIRED,
    }),
  email: Joi.string()
    .email()
    .required()
    .messages({
      'any.required': ALL_FIELDS_REQUIRED,
    }),
  password: Joi.string()
    .required()
    .messages({
      'any.required': ALL_FIELDS_REQUIRED,
    }),
});

module.exports = {
  loginSchema,
  userRegisterSchema,
};
