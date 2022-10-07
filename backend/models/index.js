const dbconfig = require('../config/db.config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(dbconfig.DB, dbconfig.USER, dbconfig.PASSWORD, {
    host: dbconfig.HOST,
    dialect: dbconfig.dialect,
    //operatorsAliases: false,
  
    pool: {
      max: dbconfig.pool.max,
      min: dbconfig.pool.min,
      acquire: dbconfig.pool.acquire,
      idle: dbconfig.pool.idle
    }
  });
  
  const db = {};
  
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;
  

  db.user = require('./users')(sequelize, Sequelize);
  db.order = require ('./order')(sequelize, Sequelize);
  db.product = require ('./products')(sequelize, Sequelize);
  db.images = require ('./images')(sequelize, Sequelize);
  db.favorite = require ('./favorite')(sequelize, Sequelize);
  db.featuredimages = require ('./featuredimages')(sequelize, Sequelize);


  db.user.hasMany(db.order);

  db.product.hasMany(db.images);

  db.images.belongsTo(db.product, {
    foreignKey: "ProductId",
  })


db.order.belongsTo(db.user, {
  foreignKey: "UserId",
});

db.product.hasMany(db.order);
db.order.belongsTo(db.product, {
  foreignKey: "ProductId",
});


db.favorite.belongsTo(db.user, {
  foreignKey: "UserId",
});

db.user.hasMany(db.favorite);
db.favorite.belongsTo(db.product, {
  foreignKey: "ProductId",
});

module.exports = db;
