const { sequelize, Sale, SaleProduct } = require('../database/models');

const mapSaleProduct = ({ id: productId, quantity }, saleId) => ({
  productId,
  saleId,
  quantity,
});

const insertSale = async (sale) =>
  sequelize.transaction(async (transaction) => {
    const response = await Sale.create(
      {
        userId: sale.userId,
        sellerId: sale.sellerId,
        totalPrice: sale.totalPrice,
        deliveryAddress: sale.deliveryAddress,
        deliveryNumber: sale.deliveryNumber,
        status: 'PENDENTE',
      },
      { transaction },
    );

    await SaleProduct.bulkCreate(
      sale.products.map((product) => mapSaleProduct(product, response.id)),
      { transaction },
    );

    return response;
  });

const SaleORM = {
  insertSale,
};

module.exports = SaleORM;
