const express = require ('express');
const router = express.Router();
const Product = require('../models/product');
const User = require('../models/user');

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

router.delete('/products/:id', function(req, res, next){
  console.log('help');
  Product.findOneAndDelete({ id: req.params.id }).then(function(product){
      res.send(product);
  }).catch(next);
});

//----------

router.post('/users', function(req, res, next){
  User.findOne({ id: req.body.id}, (err, user) => {
    if (user) {
      console.log('user found!: ', user);
      res.send(user);
    }
    else {
      console.log('user not found.');
      User.create(req.body).then((user) => {
        console.log(req.body, " saved!");
        res.send(user);
      }).catch(next);
    }
  }).catch(next);    
});

router.get('/users/:accessToken', function(req, res){
  //console.log(req.params.accessToken);
  User.findOne({ accessToken : req.params.accessToken }).then(function(user){
    res.send(user);
  });
});

router.get('/users/:id', function(req, res){
  //console.log(req.params.accessToken);
  User.findOneAndUpdate({ id : req.params.id }, req.body).then(function(user){
    User.findOne({id: req.params.id}).then(user => {
      res.send(user);
    });    
  });
});


module.exports = router;
