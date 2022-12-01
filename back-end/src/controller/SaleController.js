const SaleService = require('../service/SaleService');

const insertSale = async (req, res) => {
  const { id: userId } = req.user;

  const response = await SaleService.insertSale({ ...req.body, userId });

  res.status(201).json(response);
};

const SaleController = {
  insertSale,
};

module.exports = SaleController;
