const { Op } = require('sequelize');
const { User } = require('../database/models');

const create = async ({ email, password, name, role }) => {
  const id = Math.floor((Date.now() * Math.random()) / 10000);
  
  if (!role) {
    const user = await User.create({ id, email, password, name, role: 'customer' });
    
    return user;
  }

  const user = await User.create({ id, email, password, name, role });

  return user;
};

const findByPk = async (id) => User.findByPk(id);

const findByEmail = async (email) => User.findOne({ where: { email } });

const findAll = async (id) => User.findAll({
  where: {
    id: {
      [Op.ne]: [id],
    },
  },
}, { attributes: { exclude: ['password'] } });

const findByEmailAndPassword = async (email, password) => (
  User.findOne({ where: { email, password } }));

const destroy = async (id) => User.destroy({ where: { id } });

const UserORM = {
  create,
  destroy,
  findAll,
  findByPk,
  findByEmail,
  findByEmailAndPassword,
};

module.exports = UserORM;
