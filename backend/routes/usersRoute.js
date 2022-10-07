const express = require('express');
const router = express.Router();
const userCtrl = require('../controllers/users');
const regex = require('../middleware/regex');
const auth = require('../middleware/auth');
const schemaPassword = require('../middleware/regexPassword');
const regexEmail = require('../middleware/regexEmail');


router.post('/signup',regex,schemaPassword,userCtrl.signup);
router.post('/login',regex,userCtrl.login);
router.get('/user/:id',auth,userCtrl.getOneUser);
router.put('/user/:id',auth,regex,regexEmail,schemaPassword,userCtrl.updateOneUser);







module.exports = router;