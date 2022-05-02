module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    price: { type: DataTypes.DECIMAL },
    urlImage: { type: DataTypes.STRING },
  },
  {
    timestamps: false, 
    tableName: 'Products',
    underscored: true,
  });

  return Product;
};