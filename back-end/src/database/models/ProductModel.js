module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    'Product',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      price: DataTypes.FLOAT,
      urlImage: DataTypes.STRING,
    },
    {
      timestamps: false,
      underscored: true,
      tableName: 'products',
    },
  );

  return Product;
};
