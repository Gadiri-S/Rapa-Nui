const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/product')
const regex = require('../middleware/regex')
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config') ;

router.post('/product',multer,productCtrl.createProduct);
router.get('/products',productCtrl.getAllProducts);
router.get('/product/:id',productCtrl.getOneProduct);







module.exports = router;
