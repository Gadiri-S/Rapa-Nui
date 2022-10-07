'use strict';
const {Model, TINYINT} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Featuredimages extends Model {
   
   
  };
  Featuredimages.init({
    image: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Featuredimages',
  });
  return Featuredimages;
};