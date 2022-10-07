const db = require('../models/index');

const Product = db.product;


const Order = db.order;
exports.createOrder = (req, res, next) => {

  if( req.body.starts > req.body.ends || !req.body.starts || !req.body.ends) {
    return res.status(400).json({ error: 'Please, fill the dates correctly' });  } else {

  const id = req.body.id;
  const total  = req.body.total;
  const UserId = req.body.UserId;
  const OrderNumber = req.body.OrderNumber;
  const ProductId = req.body.ProductId;
  const starts = req.body.starts;
  const ends = req.body.ends;
  const order = new Order({
    id: id,
    total:total,
    OrderNumber:OrderNumber,
    UserId:UserId,
    ProductId:ProductId,
    starts:starts,
    ends:ends

  });

  order
    .save()
    .then(() => res.status(201).json({ message: "Order created!" }))
    .catch((error) => res.status(400).json({ error }));
  }};

exports.getAllOrders= (req, res, next) => {


    Order.findAll({
      order: [['createdAt', 'DESC']],
  
     
  
  
    })
      .then((order) => res.status(200).json(order))
      .catch((error) => res.status(404).json({ error }));
  };
  
  
  
  exports.getAllUserOrders = (req, res, next) => {
    const UserId = req.params.UserId;
  
    Order.findAll({ where: { UserId: req.params.UserId },

      include:
  
      {
        model: db.product,
        attributes: ["country", "city", "image"],
  
      },
    
    }
      
      
      )
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Impossible to GET order with the ID ${UserId}.`
          });
          
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error while trying to GET order with ID" + id
        });
      });
  
  };