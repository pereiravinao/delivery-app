'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('salesProducts', {
      saleId: {
        allowNull: false,
        field: 'sale_id',
        references: {
          model: 'sales',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },

      productId: {
        allowNull: false,
        field: 'product_id',
        references: {
          model: 'products',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },

      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('salesProducts');
  },
};