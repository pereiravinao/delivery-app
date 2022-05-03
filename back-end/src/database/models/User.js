module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role: { type: DataTypes.STRING, defaultValue: 'customer' },
  },
  {
    timestamps: false, 
    tableName: 'users',
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.sale, {foreingKey: 'user_id', as: 'user_sales'});
    User.hasMany(models.sale, {foreingKey: 'seller_id', as: 'user_seller'});
  }; 

  return User;
};