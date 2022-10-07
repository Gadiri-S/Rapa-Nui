'use strict';
const {Model, TINYINT} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Images extends Model {
   
    static associate(models) {
    
      models.Images.hasMany(models.Products);
    }
  };
  Images.init({
    image: DataTypes.STRING,
    ProductId: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Images',
  });
  return Images;
};