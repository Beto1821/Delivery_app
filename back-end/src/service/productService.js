const ProductORM = require('../model/ProductORM');

const getAll = () => ProductORM.getAll();

const productService = {
  getAll,
};

module.exports = productService;
