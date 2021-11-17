//1 Here you will import the JWT(json web token)
const jwt = require("jsonwebtoken");

//
//
//
//
// -------------------------------------------
//                 1
//           VERIFY A TOKEN
//             middleware
//
// -------------------------------------------
//
//
//
const verifyToken = (req, res, next) => {
  //

  const authHeader = req.headers.token;

  if (authHeader) {
    //   successful
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) res.status(403).json("token is not valid");
      req.user = user;
      next();
    });
    //
  } else {
    return res.status(401).json("Authorization Required");
  }

  //
  //
};

//
// -------------------------------------------
//                  2
//           VERIFY A TOKEN
//             Authorization
//
// -------------------------------------------
//

const verifyTokenAndAuthorization = (req, res, next) => {
  //1
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not allowed to do that!");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorization };
