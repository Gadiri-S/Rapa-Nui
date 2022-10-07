const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models/index');
const User = db.user

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        country : req.body.country,
        city : req.body.city,
        email: req.body.email,
        password: hash,
        isAdmin: req.body.isAdmin,
        picture: req.body.picture
      });
      user.save()
        .then(() => res.status(201).json({
          message: 'User successfully created !',

          isUserLoggedIn: true,
          id: user.id,
          email: req.body.email,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          country : req.body.country,
          city : req.body.city,
          isAdmin: req.body.isAdmin,
        }))
        .catch(error => res.status(500).json({ error: "Error, please make sure that all the fields are properly filled" }));
        


    })
    .catch(error => res.status(500).json({ error }));
};



exports.login = (req, res, next) => {
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Incorrect email' });
  
        }
        console.log(user)
        bcrypt.compare(req.body.password, user.password)
  
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Incorrect password' });
  
            }
            res.status(200).json({
              userId: user.id,
              token: jwt.sign(
                { userId: user.id },
                process.env.token,
                { expiresIn: '24h' }
              ),
              isUserLoggedIn: true,
              id: user.id,
              email: req.body.email,
              isAdmin: req.body.isAdmin
  
            });
  
  
          })
          .catch(err => (res.status(500).json({ message: err.message })))
      })
      .catch(err => (res.status(500).json({ message: err.message })))
  };

  exports.getOneUser = (req, res, next) => {
    const id = req.params.id;
  
    User.findByPk(id)
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
      });
  
  };
  
  exports.updateOneUser = (req, res, next) => {
    
    User.update(
      {
        firstname: req.body.firstname,
        lastName: req.body.lastName,  
        country: req.body.country,  
        city: req.body.city,  
        email:req.body.email,
      },
    
      { where: { id: req.params.id } },

    )
      .then(() =>
        res
          .status(201)
          .json({ message: "Utilisateur modifié" })
      )
      .catch((error) => res.status(500).json({ error }));

  }
    ;