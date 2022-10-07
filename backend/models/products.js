'use strict';
const {Model, TINYINT} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
   
    static associate(models) {
    
      models.Product.hasMany(models.Order);
      
    }
  };
  Product.init({
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,    
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};