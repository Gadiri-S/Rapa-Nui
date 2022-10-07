'use strict';
const {Model, INT, DATE} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        static associate(models) {
          models.Order.belongsTo(models.User, {
            foreignKey: 'UserId'
    
          })
    
          models.Order.belongsTo(models.Product, {
            foreignKey: 'ProductId'
    
          })
    
        }
      };
  Order.init({
  total: DataTypes.STRING,
  UserId: DataTypes.STRING,
  ProductId : DataTypes.STRING,
  OrderNumber : DataTypes.STRING,
  starts: DataTypes.DATE,
  ends: DataTypes.DATE,

  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};