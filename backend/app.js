const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const path = require("path");
require('dotenv').config();



const app = express();

const db = require("./config/db.config");



app.use(helmet());



app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization",

    
  );
  res.setHeader(
    
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  res.setHeader(
    "Cross-Origin-Resource-Policy",
    "cross-origin"
  );

  next();
});



app.use(bodyParser.json()); // Permet d'extraire le format JSON de nos requêtes 


app.use('/images', express.static(path.join(__dirname, 'images'))); // On récupère les images dans notre dossier images




const usersRoute = require('./routes/usersRoute');
app.use('/api/', usersRoute);
const productsRoute = require('./routes/productsRoute');
app.use('/api/', productsRoute);
const imagesRoute = require('./routes/imagesRoute');
app.use('/api/', imagesRoute);
const orderRoute = require('./routes/orderRoute');
app.use('/api/', orderRoute);
const favoriteRoute = require('./routes/favoriteRoute');
app.use('/api/', favoriteRoute);
const featuredRoute = require('./routes/featuredRoute');
app.use('/api/', featuredRoute);


/*
const postRoute = require('./routes/postRoute');
const commentRoute = require('./routes/commentRoute');

app.use('/api/', postRoute);
app.use('/api/', commentRoute);


*/

module.exports = app;