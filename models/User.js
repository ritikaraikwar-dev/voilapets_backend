const mongoose = require('mongoose');

// schema for user authentication

const UserSchema = new mongoose.Schema({

      firstName:{
           type:String,
           required:true,
           trim: true
      },
      lastName:{
           type:String,
           required:true,
           trim: true
      },
      email:{
           type:String,
           required:true,
           unique:true,
           lowercase:true
      },
      password:{
            type:String,
            required:true
      },
      isVerified:{
             type:Boolean,
             default:false
      },
      createdAt:{
             type:Date,
             default:Date.now
      },
      lastLogin:{
           type:Date
      }
});



module.exports = mongoose.model('User',UserSchema);