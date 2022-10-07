const express = require('express');
const router = express.Router();
const FavoriteCtrl = require('../controllers/favorite')
const auth = require('../middleware/auth')

router.post('/favorite',FavoriteCtrl.createFavorite);
router.get('/favorite/:ProductId',FavoriteCtrl.getProductFavorite);
router.delete('/favorite/:id',FavoriteCtrl.deleteFavorite);







module.exports = router;