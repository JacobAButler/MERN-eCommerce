const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let product = new Schema({

  product_name:{
    type:String
  },
  product_description:{
    type: String
  },

  product_price:{
    type: Number
  },

  product_quantity:{
    type: Number
  },

  product_sellerNAME:{
    type:String
  },

  product_sellerID:{
    type:String
  },

  product_active:{
    type: Boolean
  },

  product_images:{
    type: [String]
  }

});

module.exports = mongoose.model('product', product);
