const { User } = require('../database/models');

const findByPk = async (id) => User.findByPk(id);

const findByEmailAndPassword = async (email, password) => (
  User.findOne({ where: { email, password } }));

const UserORM = {
  findByPk,
  findByEmailAndPassword,
};

module.exports = UserORM;
