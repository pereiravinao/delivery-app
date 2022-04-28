module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false, 
    tableName: 'Users',
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Sales,
      { foreignKey: 'userId', as: 'salesUser' });
  };

  User.associate = (models) => {
    User.hasMany(models.Sales,
      { foreignKey: 'sellerId', as: 'salesSeller' });
  };


  return User;
};