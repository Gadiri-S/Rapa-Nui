'use strict';
const {Model, TINYINT} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Favorite extends Model {
        static associate(models) {
          models.Favorite.belongsTo(models.User, {
            foreignKey: 'FavoriteUserId'
    
          })
    
          models.Favorite.belongsTo(models.Product, {
            foreignKey: 'ProductId'
    
          })
    
        }
      };
  Favorite.init({
  UserId: DataTypes.STRING,
  ProductId : DataTypes.STRING,
  isFavorite : TINYINT

  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};