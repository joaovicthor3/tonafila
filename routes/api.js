const express = require ('express');
const router = express.Router();
const Product = require('../models/product');

// get a list of ninjas from the db
router.get('/products', function(req, res, next){
  Product.find({}).then(function(products){
    res.send(products);
  });

});

router.get('/products/:id', function(req, res, next){
  console.log(req.params.id);
  Product.findOne({ id : req.params.id }).then(function(product){
    res.send(product);
  });

});

// add a new ninja to the db
router.post('/products', function(req, res, next){
    Product.create(req.body).then(function(product){
        console.log(req.body, " saved!");
        res.send(product);
    }).catch(next);
});

// update a ninja in the db
router.put('/products/:id', function(req, res, next){
  Product.findByIdAndUpdate({id: req.params.id}, req.body).then(function(){
      Product.findOne({id: req.params.id}).then(function(product){
          res.send(product);
      });
  }).catch(next);
});

// delete a ninja from the db
// router.delete('/products/:id', function(req, res, next){
//   console.log('help');
//   Product.findByIdAndRemove({ id: req.params.id }).then(function(product){
//       res.send(product);
//   }).catch(next);
// });

router.delete('/products/:id', function(req, res, next){
  console.log('help');
  Product.findOneAndDelete({ id: req.params.id }).then(function(product){
      res.send(product);
  }).catch(next);
});
module.exports = router;
