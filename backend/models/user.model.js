const mongoose = require('mongoose');

const Schema = mongoose.Schema;


let CART = new Schema({
    items:{
      type: [String]
    },
    total: {
      type: Number
    },
    formattedTotal:{
      type:String
    },
});

let user = new Schema({
  user_name: {
    type: String
  },
  user_products:
  {
    type: Array
  },
  user_email:{
    type:String
  },
  user_address: {
    type:String
  },
  user_phone:{
    type: Number
  },
  user_cart:{
    type: CART
  },
  user_active:{
    type:Boolean
  }
});


/*

when adding things to cart look at this SO answer for help

https://stackoverflow.com/questions/33049707/push-items-into-mongo-array-via-mongoose

 */
// exports.addToCart = function(req,res,next)
// {
//   var newItem = {"newItem": req.body.}
// }

module.exports = mongoose.model('User', user);
