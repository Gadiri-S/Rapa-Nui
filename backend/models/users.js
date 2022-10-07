'use strict';
const {Model, TINYINT} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
   
    static associate(models) {
    
      models.User.hasMany(models.Order);
    }
  };
  User.init({
    email: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    password: DataTypes.STRING,
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    isAdmin : TINYINT,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};