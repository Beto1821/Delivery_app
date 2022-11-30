const RestError = require('../../errors/RestError');

function validateSchema(schema, obj) {
  const { error, value } = schema.validate(obj);

  if (error) {
    throw new RestError(422, error.message);
  }

  return value;
}

module.exports = validateSchema;
