const db = require('../models/index');
const fs = require('fs');

const Favorite = db.favorite;
exports.createFavorite = (req, res, next) => {

 
  const ProductId = req.body.ProductId;
  const UserId = req.body.UserId;
  const isFavorite = 1

  const favorite = new Favorite ({
    ProductId: ProductId,
    UserId : UserId,
    isFavorite : isFavorite
  });

  favorite
    .save()
.then(() => res.status(201).json({ message: "Added to favorite" }))
    .catch((error) => res.status(400).json({ error }));
};
exports.deleteFavorite = (req, res, next) => {
    Favorite.findOne({ where: { id: req.params.id } })
      .then(favorite => {
  
        Favorite.destroy({ where: { id: req.params.id } })
          .then(() => res.status(200).json({ message: 'Favorite removed' }))
          .catch(error => res.status(400).json({ error }));
  
      })
      .catch(error => res.status(500).json({ error }));
  };











exports.getProductFavorite = (req, res, next) => {
  const ProductId = req.params.ProductId;

  Favorite.findAll({ where: { ProductId: req.params.ProductId } })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Impossible to GET the favorites from product with the ID ${ProductId}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error while trying to GET favorites from product with ID" + ProductId
      });
    });

};