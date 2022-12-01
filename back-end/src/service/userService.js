const { User } = require('../database/models');
const generateToken = require('../auth/generateToken');
const RestError = require('../errors/RestError');
const md5 = require('md5');

const readOne = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    throw new RestError(404, 'User not exists');
  }

  if (password !== user.password) {
    throw new RestError(401, 'Incorrect email or password');
  }

  const token = generateToken(user);

  return token;
};

module.exports = { readOne };
