const { User } = require('../database/models');

const create = async ({ email, password, name }) => {
  const id = Math.floor((Date.now() * Math.random()) / 10000);
  
  const user = await User.create({ id, email, password, name, role: 'customer' });
  
  return user;
};

const findByPk = async (id) => User.findByPk(id);

const findByEmail = async (email) => User.findOne({ where: { email } });

const findByEmailAndPassword = async (email, password) => (
  User.findOne({ where: { email, password } }));

const UserORM = {
  create,
  findByPk,
  findByEmail,
  findByEmailAndPassword,
};

module.exports = UserORM;
