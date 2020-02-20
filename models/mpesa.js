'use strict';
module.exports = (db, Sequelize) => {
  const Mpesa = db.define('mpesa', {
    transaction: Sequelize.STRING,
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
    }

  }, {});
  Mpesa.associate = function(models) {
    // associations can be defined here
  };
  return Mpesa;
};