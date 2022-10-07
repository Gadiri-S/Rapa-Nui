const db = require('../models/index');
const fs = require('fs');

const Images = db.images;
exports.createImages = (req, res, next) => {

 
  const ProductId = req.body.ProductId;
  image = (req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null)
  const images = new Images({
    ProductId: ProductId,
    image: image,
  });

  images
    .save()
    .then(() => res.status(201).json({ message: "image saved" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllImages = (req, res, next) => {


  Images.findAll({
    order: [['createdAt', 'DESC']],


  })
    .then((images) => res.status(200).json(images))
    .catch((error) => res.status(404).json({ error }));
};



exports.getGroupImages = (req, res, next) => {
  const ProductId = req.params.ProductId;

  Images.findAll({ where: { ProductId: req.params.ProductId } })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Impossible to GET image with the ID ${ProductId}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error while trying to GET image with ID" + ProductId
      });
    });

};