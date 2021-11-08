const express = require("express");
const app = express();
// Mongoose
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//
//dotenv
dotenv.config();
//
mongoose
  .connect(process.env.MONGO_RAINBOW_URL)
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => console.log("error"));

//

// (()=> {})  callback function
// process.env.PORT || 5000 means: if there is not port at our .env file, then ||, use this number: 500
app.listen(process.env.PORT || 5000, () => {
  console.log(`Started server on port`);
});
