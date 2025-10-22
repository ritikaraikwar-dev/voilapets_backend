const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    console.log('-----------------------------------------------connect to bd before');
    
    // const db = await mongoose.connect("mongodb://localhost:27017/voilapets",);
   const db = await mongoose.connect("mongodb+srv://ritikaitgeeks_db_user:itgeeks%40123@voilapetsdb.tsoquha.mongodb.net/?retryWrites=true&w=majority&appName=voilapetsdb")
    console.log('-----------------------------------------------connect to bd after');

    console.log(`database connected successfully ${db.connection.name}`);
  } catch (error) {
    console.log("sorry !! your database is not connected ", error);
  }
};

module.exports = dbConnect;
