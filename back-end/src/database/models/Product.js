module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.DECIMAL },
    urlImage: { type: DataTypes.STRING },
  },
  {
    timestamps: false, 
    tableName: 'products',
    underscored: true,
  });

  return Product;
};