'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('mpesas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transaction: {
        type: Sequelize.STRING
      },
      MerchantRequestID:{
        type: Sequelize.STRING,
        allowNull: true
      },
      CheckoutRequestID:{
        type: Sequelize.STRING,
        allowNull: true
      },
      ResponseDescription:{
        type: Sequelize.STRING,
        allowNull: true
      },
      ResponseCode:{
        type: Sequelize.STRING,
        allowNull: true
      },
      ResultDesc:{
        type: Sequelize.STRING,
        allowNull: true
      },
      ResultCode:{
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('mpesas');
  }
};