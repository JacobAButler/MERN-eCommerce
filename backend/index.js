const express = require('express');
/* create an app using Express.js which makes creating a node server much easier. */
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
/* mongoose to create an interface with a mongodb */
const mongoose = require('mongoose');
/* because mongoose documentation told me to do so */
mongoose.set('useFindAndModify', false);
/* use the Routes module from express to set up a REST API */
const Routes = express.Router();
/* Set the port to listen on */
const PORT = 4000;
/* import the model file for the user */
let USER = require('./models/user.model');
let PRODUCT = require('./models/product.model');
app.use(cors());
app.use(bodyParser.json());
/* create a connection to the mongoDb database */
mongoose.connect('mongodb://127.0.0.1:27017/shopping', {useNewUrlParser: true});
const connection = mongoose.connection;
/* open the connection to the database */
connection.once('open', function(){
  console.log("Connected to MongoDb database successfully!")
});



/* langing page route */
Routes.route('/').get(function(req, res) {
  PRODUCT.find(function(err, products) {
    if(err) {
      console.log(err);
    } else {
      res.json(products);
    }
  });
});
/* user default page */
Routes.route('/user').get(function(req, res) {
  /*
    user landing page - display all products after being logged in
  */
});
/* add new user to service */
Routes.route('/user/create').post(function(req, res) {
  let user = new USER(req.body);
  user.save()
    .then(user => {
      res.status(200).json({'user add': ' new user added successfully!'});
    })
    .catch(err => {
      res.status(400).send('adding new user failed');
    });


});
/* Special test end point to see all users */
Routes.route('/user/all').get(function(req,res) {
  USER.find(function(err,users) {
    if(err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});
/* display information about logged in user */
Routes.route('/user/:id').get(function(req, res)
{
  let id = req.params.id;
  USER.findById(id, function(err, user) {
    res.json(user);
  });
});
/* update user information */
Routes.route('/user/:id/update').put(function(req, res)
{
  USER.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, user) {
    if(!user)
      {
        res.status(404).send("data is not found");
      }
      else
      {
        user.save().then(user => {
          res.json('User updated successfully!');
        })
        .catch(err => {
          res.status(400).send("Update not possible");
        });
      }
  });

});




/* display user cart */
Routes.route('/user/:id/cart').get(function(req, res)
{
  let id = req.params.id;
  USER.findById(id, function(err,user){
    res.json(user);
  });
});
/* add item to users cart */
Routes.route('/user/:userID/cart/add').put(function(req, res)
{
  /* https://zellwk.com/blog/mongoose-subdocuments/ */
  let user = USER.findById(req.params.userID, function(err,user) {
    res.json(user);

    console.log(user.user_cart.items)
    user.user_cart.items.push(req.body.items)
    user.save()
  });
});
/* remove item from users cart */
Routes.route('/user/:id/cart/remove').put(function(req,res) {
  let user = USER.findById(req.params.id, function(err, user) {
    let cartIndex = user.user_cart.items.indexOf(req.body.items);
    if(cartIndex>-1)
    {
      user.user_cart.items.splice(cartIndex,1);
    }
    res.json(user);
    user.save();
    // user.user_cart.items.filter(function(req.body.items))
  });
});
/* make order from contents of the cart */
Routes.route('/user/:id/cart/order').post(function(req, res)
{
  /*
    take the contents of the cart and make a new order.
    The order should stay in current order for 3 minutes,
    then post as a completed order.
  */
});
/* current orders */
Routes.route('/user/:id/orders').get(function(req, res)
{
  /*
    show all orders from this user
    show in progress orders first

    show completed orders second
  */
});
/* past orders */
Routes.route('/user/:id/orders/completed').get(function(req, res)
{
  /*
    restricted access to user that is logged in
    will show the users cart items
  */
});
/* store */
Routes.route('/user/:id/store').get(function(req, res)
{
  /*
    this will not be id restricted for the logged in user to allow the user to see other stores
    ^^ this is worded poorly

    find all products from this seller
  */
});




/* View all products */
Routes.route('/products').get(function(req, res)
{
  PRODUCT.find(function(err,products) {
    if(err) {
      console.log(err);
    }
    else
    {
      res.json(products);
    }
  });
});

/* View all active products */
Routes.route('/products/active').get(function(req, res) {
  PRODUCT.find({product_active: true}, function(err, products) {
    if(err) {
      console.log(err);
    }
    else
    {
      res.json(products);
    }
  });
});

/* View all inactive products */
Routes.route('/products/inActive').get(function(req, res) {
  PRODUCT.find({product_active: false}, function(err, products) {
    if(err) {
      console.log(err);
    }
    else
    {
      res.json(products);
    }
  });
});
/* add new product */
Routes.route('/products/add/:id').post(function(req, res)
{

  /*
    when refactoring this endpoint use the following to potentially solve error in the node console

    https://gist.github.com/zcaceres/f38b208a492e4dcd45f487638eff716c
   */
  let product = new PRODUCT(req.body);
  product.save()
    .then(product => {
      res.status(200).json({'product add': 'added product successfully'});
    })
    .catch(err => {
      res.status(400).send('adding new product failed');
    });

    console.log(product.product_sellerID)
    console.log(product.id)


    console.log('making new product for user')
    USER.findByIdAndUpdate(product.product_sellerID, { $push: {user_products: product.id} }, function (err, user) {
      if(!user)
        {
          res.status(404).send("data is not found");
        }
        else
        {
          user.save().then(user => {
            res.json('User updated successfully!');
          })
          .catch(err => {
            res.status(400).send("Update not possible");
          });
        }
    });


});
/* product page by id */
Routes.route('/products/:id').get(function(req, res) {
  let id = req.params.id;
  PRODUCT.findById(id, function(err, product) {
    if(err) {
      console.log('Error!!');
      res.json(err);
    }
    else
    {
      res.json(product);
    }
  });
});
/* update an existing product listing */
Routes.route('/products/:id/update').put(function(req, res) {

  PRODUCT.findByIdAndUpdate(req.params.id, {$set: req.body}, function(err,product) {
    if(!product)
    {
      res.status(404).send("data is not found!");
    }
    else
    {

      product.save().then(product => {
        res.json('Product update successfully!');
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
    }
  });

});

/*
  prepends /shopping to all routes, so when the endpoints send requests
  to the database it will go to the correct database on the localhost
*/
app.use('/shopping', Routes);

app.listen(PORT, function() {
  console.log("Server running on port: " + PORT);
});
