const { Op } = require('sequelize');
const { Product } = require('../database/models');

const findManyByPk = async (...ids) => {
  const result = await Product.findAll({
    where: {
      id: {
        [Op.in]: ids,
      },
    },
  });

  return result;
};

const ProductORM = {
  findManyByPk,
};

module.exports = ProductORM;
