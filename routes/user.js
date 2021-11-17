const User = require("../models/User");
const { verifyToken, verifyTokenAndAuthorization } = require("./verifyToken");

const router = require("express").Router();
//
//---------------------------------
//            UPDATE
//---------------------------------
//
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  //

  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString();
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      //
      //
      // admin, all to see if we have
      // the right credentials to proceed with an update.
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//
module.exports = router;
