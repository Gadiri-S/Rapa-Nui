const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/featuredimages')
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config') ;

router.post('/featured',multer,productCtrl.createFeatured);
router.get('/featured',productCtrl.getAllFeatured);
router.get('/featured/:id',productCtrl.getOneImage);


//router.get('/images/:ProductId',productCtrl.getGroupImages);







module.exports = router;
