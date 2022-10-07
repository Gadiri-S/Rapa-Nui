const db = require('../models/index');
const fs = require('fs');

const Featured = db.featuredimages;

exports.createFeatured = (req, res, next) => {

  image = (req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null)
  const images = new Featured({
    image: image,
  });

  images
    .save()
    .then(() => res.status(201).json({ message: "image saved" }))
    .catch((error) => res.status(400).json({ error }));
};

exports.getAllFeatured = (req, res, next) => {

  Featured.findAll({
    order: [['createdAt', 'DESC']],


  })
    .then((images) => res.status(200).json(images))
    .catch((error) => res.status(404).json({ error }));
};

exports.getOneImage = (req, res, next) => {
  const id = req.params.id;

  Featured.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Impossible to find user with ID ${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "An error occured while attempting to retrieve user with ID" + id
      });
    })};