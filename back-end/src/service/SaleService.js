const RestError = require('../errors/RestError');
const SaleORM = require('../model/SaleORM');
const UserORM = require('../model/UserORM');
const { newSaleSchema } = require('./validation/saleSchema');
const validateSchema = require('./validation/validateSchema');

const insertSale = (sale) => {
  const value = validateSchema(newSaleSchema, sale);
  const seller = UserORM.findByPk(sale.sellerId);

  if (!seller || seller.role !== 'seller') {
    throw new RestError(422, 'Invalid seller');
  }

  const result = SaleORM.insertSale(value);

  return SaleORM.findByPk(result.id);
};

const SaleService = {
  insertSale,
};

module.exports = SaleService;
