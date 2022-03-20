var express = require('express');
var router = express.Router();
const User=require('../UserSchema');
const Product=require('../ProductSchema');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //get all users from DB
    User.find(function(err,users){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.json(users);
        }
    }
    );

});
//login user
router.post('/login', function(req, res, next) {
    //login user
    User.findOne({email:req.body.email,password:req.body.password},function(err,user){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.json(user);
        }
    }
    );
});
//register user
router.post('/register', function(req, res, next) {
    //register user
    var user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        role:"normal"
    });
    user.save(function(err,user){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.json(user);
        }
    } 
    );
});
//get orders of user
router.get('/ordersOfUser', function(req, res, next) {
    //get orders of user
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.json(user);
        }
    }
    );
});

//add a new order to user
router.post('/addOrder', function(req, res, next) {
    //add a new order to user
    User.findOneAndUpdate({email:req.body.email},{$push:{orders:req.body.order}},function(err,user){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send("Order added");
        }
    }
    );
});
//get all orders from all users
router.get('/getOrders', function(req, res, next) {
    //get all orders from all users
    User.find(function(err,users){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.json(users);
        }
    }
    );
});
//accept a order from user
router.post('/acceptOrder', function(req, res, next) {
    //accept a order from user and update the order status to "accepted"
    User.findOneAndUpdate({email:req.body.email,orders:{$elemMatch:{id:req.body.orderId}}},{$set:{'orders.$.status':"accepted"}},function(err,user){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send("Order accepted");
        }
    } 
    );
});

//update email of user
router.post('/updateEmail', function(req, res, next) {
    //update email of user
    User.findOneAndUpdate({email:req.body.email},{$set:{email:req.body.newEmail}},function(err,user){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send("Email updated");
        }
    }
    );
});
//delete a user from DB
router.post('/deleteUser', function(req, res, next) {
    //delete a user from DB
    User.findOneAndRemove({email:req.body.email},function(err,user){
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            res.send("User deleted");
        }
    }
    );
});
//create a simple user 
router.post('/createUser', function(req, res, next) {
    //create a simple user
    var user=new User({
        name:req.body.name,
        email:req.body.email, 
        password:req.body.password, 
        role:req.body.role  
    }); 
    user.save(function(err,user){
        if(err){
            console.log(err);
            res.send(err);
        } 
        else{
            res.send("user created");
        }
    }
    );
});


module.exports = router;
