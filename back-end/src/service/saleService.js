const RestError = require('../errors/RestError');
const ProductORM = require('../model/ProductORM');
const SaleORM = require('../model/SaleORM');
const UserORM = require('../model/UserORM');
const { newSaleSchema, statusSchema } = require('./validation/saleSchema');
const validateSchema = require('./validation/validateSchema');

const validateSeller = async (sellerId) => {
  const seller = await UserORM.findByPk(sellerId);

  if (!seller || seller.role !== 'seller') {
    throw new RestError(422, 'Invalid seller');
  }
};

const validateProducts = async (products) => {
  const response = await ProductORM.findManyByPk(
    ...products.map(({ id }) => id),
  );

  if (response.length < products.length) {
    throw new RestError(422, 'Some of the provided products do not exist');
  }
};

const insertSale = async (sale) => {
  const value = validateSchema(newSaleSchema, sale);

  await validateSeller(sale.sellerId);
  await validateProducts(sale.products);

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

const findUserSales = async (user) => {
  if (user.role === 'seller') {
    return SaleORM.findBySeller(user.id);
  }

  return SaleORM.findByUser(user.id);
};

const updateStatus = async (id, status) => {
  validateSchema(statusSchema, status);

  return SaleORM.update(id, { status });
};

const SaleService = {
  insertSale,
  findSaleById,
  findUserSales,
  updateStatus,
};

module.exports = SaleService;
