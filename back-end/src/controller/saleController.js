const saleService = require('../service/saleService');

const insertSale = async (req, res) => {
  const { id: userId } = req.user;

  const response = await saleService.insertSale({ ...req.body, userId });

  res.status(201).json(response);
};

const saleController = {
  insertSale,
};

module.exports = saleController;
