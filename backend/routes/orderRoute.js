const express = require('express');
const router = express.Router();
const OrderCtrl = require('../controllers/order')
const auth = require('../middleware/auth')

router.post('/order',OrderCtrl.createOrder);
router.get('/order',OrderCtrl.getAllOrders);
router.get('/order/:UserId',OrderCtrl.getAllUserOrders);





module.exports = router;
