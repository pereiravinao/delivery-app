'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },

      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(4,2),
      },

      urlImage: {
        allowNull: false,
        field: 'url_image',
        type: Sequelize.STRING,
      },
      
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Products');
  },
};