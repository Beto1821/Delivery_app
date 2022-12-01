const saleService = require('../service/saleService');

const insertSale = async (req, res) => {
  const { id: userId } = req.user;

  const response = await saleService.insertSale({ ...req.body, userId });

  res.status(201).json(response);
};

const findSaleById = async (req, res) => {
  const { id } = req.params;

  const response = await saleService.findSaleById(id);

  res.status(200).json(response);
};

const saleController = {
  insertSale,
  findSaleById,
};

module.exports = saleController;
