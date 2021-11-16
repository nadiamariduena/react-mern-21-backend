const router = require("express").Router();

///the first argument will be the (:id, ) ,it is a specific user id
// the second argument(1, second argument)  will be middleware
//  to verify our JWT, for the second argument you will need to create
// a new file inside the routes, it will be call 'verifyToken.js'
router.put("/:id");

module.exports = router;
