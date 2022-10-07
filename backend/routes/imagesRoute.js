const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/images')
const regex = require('../middleware/regex')
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config') ;

router.post('/images',multer,productCtrl.createImages);
router.get('/images',productCtrl.getAllImages);
router.get('/images/:ProductId',productCtrl.getGroupImages);







module.exports = router;
