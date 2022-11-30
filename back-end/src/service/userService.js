const { User } = require('../database/models');
const generateToken = require('../auth/generateToken');
const RestError = require('../errors/RestError');

const readOne = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) {
    throw new RestError(404, 'User not found');
  }

  const token = generateToken(user);

  return token;
};

module.exports = { readOne };
