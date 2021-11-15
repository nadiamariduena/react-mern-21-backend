const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//REGISTER
//post, because the user is going to send username, password and other information
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRETO
    ).toString(),
  });
  //

  // error handling
  try {
    const savedUser = await newUser.save();
    //console.log(savedUser);
    res.status(200).json(savedUser);
    //200 is successfully
    // 201 is successfully add
  } catch (err) {
    // console.log(err);
    res.status(500).json(err);
  }
  //
});
//
//
//
//
// -------------------------------------------
//
//        SIGN IN/LOGIN
//
// -------------------------------------------

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });

    //If it snot user send error
    !user && res.status(401).json("wrong username");
    //

    //

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRETO
    );

    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    //1 if the password isnt equal to the request the user is sending
    // then, show a 401 error
    OriginalPassword !== req.body.password &&
      res.status(401).json("wrong password");
    //
    //He we are destructuring the password + other information
    // we do that in a way to diversify the password that we see
    // inside the mongoDB
    // 3
    const { password, ...others } = user._doc;
    //
    //
    //
    //2 if its good, show success
    res.status(200).json(others);

    //
  } catch (err) {
    res.status(500).json(err);
  }
});

//

module.exports = router;
