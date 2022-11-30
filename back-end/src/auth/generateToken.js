const jwt = require('jsonwebtoken');
const getJwtKey = require('./getJwtKey');

async function generateToken(user) {
  const secret = await getJwtKey();

  return jwt.sign({ payload: user }, secret, {
    algorithm: 'HS256',
    expiresIn: '7d',
  });
}

module.exports = generateToken;
