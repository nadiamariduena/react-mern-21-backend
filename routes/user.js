const { verifyToken } = require("./verifyToken");

const router = require("express").Router();
// 2 arguments
router.put("/:id", verifyToken, (req, res) => {
  // If this req. made by the user.id  is equal === to this /:id
  // it means its the same user and he/she is allowed to make updates
  //   to this user information
  // : stand for params
  // i will also check if its an Admin:  || req.user.isAdmin)
  if (req.user.id === req.params.id || req.user.isAdmin) {
    //   in this case we can update our user, but if
    // we write it like so we will repeat ourself
    // So we will create another function inside the
    // verifyToken.js
  }
});

module.exports = router;
