const router = require("express").Router();
const User = require("../models/User");

//REGISTER
//post, because the user is going to send username, password and other information
router.post("/register", (req, res) => {
  const newUser = User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
});

//
//
module.exports = router;
