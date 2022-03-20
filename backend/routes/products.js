var express = require('express');
var router = express.Router();
const User=require('../UserSchema');
const Product=require('../ProductSchema');
//get all products from DB

router.get('/', function(req, res, next) {
  //get all products from DB
    Product.find(function(err,products){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.json(products);
        }
    }
    );
});

module.exports = router;
