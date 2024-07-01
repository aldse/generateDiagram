const mongoose = require("mongoose");
require('dotenv').config();

const db_uri = process.env.MONGODB_CONNECT_URI;

async function connectToDB() {
  try {
    await mongoose.connect(db_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
  }
}

module.exports = connectToDB;