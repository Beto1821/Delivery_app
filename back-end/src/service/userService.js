const md5 = require('md5');
const generateToken = require('../auth/generateToken');
const RestError = require('../errors/RestError');
const UserORM = require('../model/UserORM');
const { loginSchema } = require('./validation/userSchema');
const validateSchema = require('./validation/validateSchema');

const readOne = async (email, password) => {
  validateSchema(loginSchema, { email, password }, 400);
  
  const md5Pass = md5(password);

  const user = await UserORM.findByEmailAndPassword(email, md5Pass);

  if (!user) {
    throw new RestError(404, 'User not exists');
  }

  if (md5Pass !== user.password) {
    throw new RestError(401, 'Incorrect email or password');
  }

  const token = generateToken(user);

  return token;
};

module.exports = { readOne };
