const db = require('../models/index');
const fs = require('fs');

const Product = db.product;
exports.createProduct = (req, res, next) => {

  if ( !req.body.price || !req.body.city || !req.body.country || req.body.price <=0) {
    return res.status(400).send({
        message: "Please make sure that the trip you are creating contains a name, a price, a city, a country and that the dates of beginning and end are correct"
    })
};



  const id = req.body.id;
  const country  = req.body.country;
  const city = req.body.city;
  const price = req.body.price;
  const description = req.body.description
  image = (req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null)
  const product = new Product({
    id: id,
    image: image,
    country: country,
    city: city,
    price : price,
    description : description
  });

  product
    .save()
    .then(() => res.status(201).json({ message: "product saved" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllProducts = (req, res, next) => {


  Product.findAll({
    order: [['createdAt', 'DESC']],

  /*  include:

    {
      model: db.user,
      attributes: ["firstName", "lastName", "picture"],

    },*/


  })
    .then((product) => res.status(200).json(product))
    .catch((error) => res.status(404).json({ error }));
};



exports.getOneProduct = (req, res, next) => {
  const id = req.params.id;

  Product.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Impossible to GET product with the ID ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error while trying to GET product with ID" + id
      });
    });

};