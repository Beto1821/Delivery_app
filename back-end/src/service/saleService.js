const RestError = require('../errors/RestError');
const ProductORM = require('../model/ProductORM');
const SaleORM = require('../model/SaleORM');
const UserORM = require('../model/UserORM');
const { newSaleSchema } = require('./validation/saleSchema');
const validateSchema = require('./validation/validateSchema');

const insertSale = async (sale) => {
  const value = validateSchema(newSaleSchema, sale);
  const seller = await UserORM.findByPk(sale.sellerId);
  if (!seller || seller.role !== 'seller') {
    throw new RestError(422, 'Invalid seller');
  }

  const products = await ProductORM.findManyByPk(
    ...sale.products.map(({ id }) => id),
  );

  if (products.length < sale.products.length) {
    throw new RestError(422, 'Some of the provided products do not exist');
  }

  const result = await SaleORM.insertSale(value);

  return SaleORM.findByPk(result.id);
};

const findSaleById = async (id) => {
  const response = await SaleORM.findByPk(id);

  if (!response) {
    throw new RestError(404, 'Sale not found');
  }

  return response;
};

const SaleService = {
  insertSale,
  findSaleById,
};

module.exports = SaleService;
