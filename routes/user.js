const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

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

//
//
//
//---------------------------------
//            DELETE
//---------------------------------
//
//
//
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
  //
  // Here we will find and delete
  //  that specific User/ and all the
  // schema data that this User contains
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//
//
//
//---------------------------------
//           GET user
//  only the Admin get the user
//---------------------------------
//
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
  try {
    // Find the user(you need of specific .findById() method to find it)
    const user = await User.findById(req.params.id);
    // grab the password and ...all the data exe. 'others'
    const { password, ...others } = user._doc;
    //._doc; will grab the user data from the object in mongoDb
    res.status(200).json({ others });
  } catch (err) {
    res.status(500).json(err);
  }
});
//
//

//---------------------------------
//           GET all users
//---------------------------------
//
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;

  try {
    // Find all the user(no need of specific .findById() method)
    // the '_id:' operator is used to remove the document ID for a simpler output.
    const users = query
      ? // if there is any Query, it s going to return 'await User.find().sort({ _id: -1 }).limit(5)'
        // if there isnt : any query, its going to return all users like so: await User.find();
        await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    //
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});
//
//

//---------------------------------
//           GET STATS
//---------------------------------
//
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  // We will use again the **-1** to return the last year today
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  //
  try {
    const data = await User.aggregate([
      //1 here we are going to try to $match the condition
      //the condition is: createdAt, because if you see
      // the object in mongo, every user has an update, and in the
      // condition we are going to say less than today and 'greater $gte' than last year
      { $match: { createdAt: { $gte: lastYear } } },
      // 2 and I want to take months number
      // what we are saying here below is: take the month number
      // inside the mongo 'createdAt' date
      {
        $project: {
          // take the month number, inside the created update
          month: { $month: "$createdAt" },
        },
      },

      // AFTER the $project we can 'group'
      //  the items, the users
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
      //
    ]);
    //
    res.status(200).json(data);
    //
  } catch (err) {
    res.status(500).json(err);
  }
  //
});
//

//
//

module.exports = router;
