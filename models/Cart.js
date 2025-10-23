const mongoose = require('mongoose');

// schema for cart

const cartSchema = new mongoose.Schema(
    { 
          id:{
            type:String,
             
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