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
// 2 how are we going to verify the JWT?
const verifyToken = (req, res, next) => {
  //
  //3
  const authHeader = req.headers.token;
  //
  //if there is no 'authHeader', we are going to return 'what is inside the else'
  //   4
  if (authHeader) {
    //   successful

    // So if we have a token, we should verify it:
    //it will verify the token and the JWT_SECRET_KEY, after that
    // if the token, process.env.JWT_SECRET_KEY are incorrect it will send either an error  (err) or (the data of the user, in case of success)
    //6
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      //
      //7 this is for the token, so if there is an error such as:
      //   token expire or wrong token, it will launch the err message
      if (err) res.status(403).json("token is not valid");
      //8. the success case is the user data
      //So if everything is good, we are going to assign the user data to our req
      req.user = user;
      //9 after we assign the user data to the req.user
      //   we conclude it with next(), next is like the
      next();
      //
      //
    });
    //
  } else {
    //   Unsuccessful
    //   401 which is 'not authenticated
    // 5
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
    // this is the same function we were creating inside the user.js
    if (req.user.id === req.params.id || req.user.isAdmin) {
      // if the user is an params.id user or if he is an admin, we can continue and make updates
      next();
    } else {
      // If its not :
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuthorization };
