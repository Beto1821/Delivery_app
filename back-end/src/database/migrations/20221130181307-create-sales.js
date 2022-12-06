'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        foreignKey: true,
        field: 'user_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      sellerId: {
        foreignKey: true,
        field: 'seller_id',
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      totalPrice: {
        field: 'total_price',
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      deliveryAddress: {
        field: 'delivery_address',
        allowNull: false,
        type: Sequelize.STRING,
      },
      deliveryNumber: {
        field: 'delivery_number',
        allowNull: false,
        type: Sequelize.STRING,
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_date',
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('sales');
  },
};
