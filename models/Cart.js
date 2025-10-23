const mongoose = require('mongoose');

// schema for cart

const cartSchema = new mongoose.Schema(
    { 
           userId: {
    type: mongoose.Schema.Types.ObjectId,  // refer to User model
    required: true,
    ref: 'User'
  },
  productId: {
    type: String,  // or ObjectId if you have a Product model
    required: true
  },
           title:{
            type:String,
             
           },
         price:{
            type:Number,
             
          },
          image:{
            type:String
          },
          color:{
            type:String,
             
          },
          quantity:{
            type:Number,
            default:1
          }
         
    }    
);

module.exports =   mongoose.model("Cart", cartSchema);