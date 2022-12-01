const { User } = require('../database/models');

const findByPk = async (id) => User.findByPk(id);

const UserORM = {
  findByPk,
};

module.exports = UserORM;
