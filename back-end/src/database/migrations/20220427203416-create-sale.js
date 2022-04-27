'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      userId: {
        allowNull: false,
        field: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        }
      },

      sellerId: {
        allowNull: false,
        field: 'seller_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        }
      },

      totalPrice: {
        allowNull: false,
        field: 'total_price',
        type: Sequelize.DECIMAL(9,2),
      },

      deliveryAddress: {
        allowNull: false,
        field: 'delivery_address',
        type: Sequelize.STRING,
      },

      deliveryNumber: {
        allowNull: false,
        field: 'delivery_number',
        type: Sequelize.STRING,
      },

      saleDate: {
        allowNull: false,
        field: 'sale_date',
        type: Sequelize.DATE,
      },

      status: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Sales');
  },
};