const express = require ('express');
const router = express.Router();
const Product = require('../models/product');

// get a list of ninjas from the db
router.get('/products', function(req, res, next){
  Product.find({}).then(function(products){
    res.send(products);
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
  Product.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
      Product.findOne({_id: req.params.id}).then(function(product){
          res.send(product);
      });
  }).catch(next);
});

// delete a ninja from the db
router.delete('/products/:id', function(req, res, next){
  Product.findByIdAndRemove({_id: req.params.id}).then(function(product){
      res.send(product);
  }).catch(next);
});


module.exports = router;
