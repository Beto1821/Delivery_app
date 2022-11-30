module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    'Sale',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      userId: DataTypes.NUMBER,
      sellerId: DataTypes.NUMBER,
      totalPrice: DataTypes.NUMBER,
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal('NOW()'),
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: 'PENDENTE',
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'sales',
    }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'orders',
    });
    Sale.belongsTo(models.User, {
      foreignKey: 'sellerId',
      as: 'sales',
    });
  };

  return Sale;
};
