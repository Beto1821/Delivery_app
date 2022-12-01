const RestError = require('../errors/RestError');

function restrictAccessByRole(authorizedRoles = ['administrator']) {
  return (req, _res, next) => {
    const { role } = req.user;

    if (!authorizedRoles.includes(role)) {
      throw new RestError(401, 'Role not authorized');
    }

    next();
  };
}

module.exports = restrictAccessByRole;
