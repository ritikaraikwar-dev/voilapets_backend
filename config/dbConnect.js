const mongoose = require('mongoose');

const dbConnect = async () => {
  try {
    const db = await mongoose.connect("mongodb://localhost:27017/voilapets",);
    console.log(`database connected successfully ${db.connection.name}`);
  } catch (error) {
    console.log("sorry !! your database is not connected ", error);
  }
};

module.exports = dbConnect;
