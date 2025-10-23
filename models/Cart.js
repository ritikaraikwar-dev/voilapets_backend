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
          },
          guest_id: { type: String, required: true }
         
    }    
);

module.exports =   mongoose.model("Cart", cartSchema);