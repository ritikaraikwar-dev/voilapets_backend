const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = async () => {
  try {
    console.log('-----------------------------------------------connect to bd before');
    
    // const db = await mongoose.connect("mongodb://localhost:27017/voilapets",);
   const db = await mongoose.connect(process.env.MONGO_URI)
    console.log('-----------------------------------------------connect to bd after');

    console.log(`database connected successfully ${db.connection.name}`);
  } catch (error) {
    console.log("sorry !! your database is not connected ", error);
  }
};

module.exports = dbConnect;
