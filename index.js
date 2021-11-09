const express = require("express");
const app = express();
// Mongoose
const mongoose = require("mongoose");
const dotenv = require("dotenv");
//

//
//dotenv
dotenv.config();
//
mongoose
  .connect(process.env.MONGO_RAINBOW_URL)
  .then(() => console.log("DBConnection Successful"))
  .catch((err) => console.log("error"));
/*




*/

//
//---------------------
//   BODY PARSER
//---------------------
// ALWAYS add the BODY PARSER before the routes
//
app.use(express.json());
//
//
const userRoute = require("./routes/user");
//
//
//
//
//if you are using a REST API this will be plural: instead of user , users
app.use("/api/users", userRoute);
// app.get("/api/test", () => {
//   console.log("endpoints test is successful");
// });

// (()=> {})  callback function
// process.env.PORT || 5000 means: if there is not port at our .env file, then ||, use this number: 500
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});

/*
 
What does body parser do in Express?
body-parser extract the entire body portion of an incoming request 
stream and exposes it on req. body . The middleware was a part of Express. 
js earlier but now you have to install it separately. This body-parser module parses
 the JSON, buffer, string and URL encoded data submitted using HTTP POST request.
 
*/
