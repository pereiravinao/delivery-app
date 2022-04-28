module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: { type: DataTypes.DECIMAL },
    deliveryAddress:{ type: DataTypes.STRING },
    deliveryNumber: { type: DataTypes.STRING },
    saleDate: { type: DataTypes.DATE, defaultValue: new Date() },
    status: { type: DataTypes.STRING },
  },
  {
    timestamps: false, 
    tableName: 'Sales',
    underscored: true,  
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { foreignKey: 'user_id', as: 'user_sales' });
    Sale.belongsTo(models.User,
        { foreignKey: 'seller_id', as: 'user_seller' });
  };

  return Sale;
};