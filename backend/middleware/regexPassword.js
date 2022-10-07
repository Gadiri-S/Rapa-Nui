const schemaPassword = require('../models/password');


module.exports = (req, res, next) => {
    if (!schemaPassword.validate(req.body.password)) {
        res.status(400).json({ message: 'Password too weak. Make sure to have at least 8 characters with uppercase, lowercase and two numbers' });
    }
    else {
        next();
    }
}
