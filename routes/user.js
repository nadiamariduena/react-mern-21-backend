const router = require("express").Router();

/*
The req or request: is what the user is going to send to us, in the
form of data, such as: username, email or any input, even emptiness...

after the req, we are going to send a res or response to the user:

like so: 

*/

//api/user/userPostTest
//
//   GET
//
router.get("/usertest", (req, res) => {
  res.send("user test rainbow cringe is successful");
});
//
//   POST
//
router.post("/userposttest", (req, res) => {
  //everytime the user is going to add any input, you
  //should pass   'body'
  const username = req.body.username
  console.log(username);
});
//
//
//
module.exports = router;
