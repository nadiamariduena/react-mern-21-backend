const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

const router = require("express").Router();
// 2 arguments
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  //
  //before UPDATING we are going to check the password
  //   the reason for that is because users can change their
  // passwords, so in this case we should also encrypt the password
  //COPY AND PASTE the following: this is inside the auth.js for 'register'.
  //   A
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRETO
    ).toString();
  }

  //UPDATE USER
  // After step A , we can update the user
  //   step B
try{
   const updatedUser = await User.findByIdAndUpdate(req.params.id, {
       
   }) 
}
  //
  //
});

module.exports = router;
