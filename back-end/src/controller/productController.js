const productService = require('../service/productService');

const getAll = async (req, res) => {
  const result = await productService.getAll();

  res.status(200).json(result);
};

const productController = {
  getAll,
};

module.exports = productController;
