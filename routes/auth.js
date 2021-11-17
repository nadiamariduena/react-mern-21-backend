const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
//
//---------------------------------
//           REGISTER
//---------------------------------
//
//post, because the user is going to send username, password and other information
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });
  //

  // error handling
  try {
    const savedUser = await newUser.save();
    //console.log(savedUser);
    res.status(201).json(savedUser);
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
//
//---------------------------------
//           LOG
//---------------------------------
//

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
      process.env.PASS_SECRET
    );

    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    //1 if the password isnt equal to the request the user is sending
    // then, show a 401 error
    OriginalPassword !== req.body.password &&
      res.status(401).json("wrong password");
    //
    // 4. init token
    //
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin, //if the user is admin he can delete or make
      }, //PRIVATE KEY
      process.env.JWT_SECRET_KEY,
      { expiresIn: "3d" } //when is the token  going to expire
    );
    //
    //

    const { password, ...others } = user._doc;
    //
    //
    //
    //2 if its good, show success
    res.status(200).json({ ...others, accessToken }); //pass the accessToken from 4.

    //
  } catch (err) {
    res.status(500).json(err);
  }
});

//

module.exports = router;
