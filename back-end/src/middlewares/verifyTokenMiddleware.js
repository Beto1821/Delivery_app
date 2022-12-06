const jwt = require('jsonwebtoken');
const getJwtKey = require('../auth/getJwtKey');
const RestError = require('../errors/RestError');

async function verifyToken(req, _res, next) {
  try {
    const secret = await getJwtKey();
    const token = req.headers.authorization;

    if (!token) {
      throw new RestError(401, 'Authorization token not found!');
    }

    const { payload } = jwt.verify(token, secret);

    req.user = payload;
    next();
  } catch (err) {
    if (err.statusCode) {
      throw err;
    }
    throw new RestError(401, 'Token must be a valid token');
  }
}

module.exports = verifyToken;
