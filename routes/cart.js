const Cart = require("../models/Cart");

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");
const router = require("express").Router();
//
//

//---------------------------------
//             CREATE
//---------------------------------
//
//
// Here we will require the 'verifyToken',
// because any user can create a cart.
//
router.post("/", verifyToken, async (req, res) => {
  //
  //
  const newCart = new Cart(req.body);
  //
  try {
    // Here we will save the Cart
    const savedCart = await newCart.save();
    // After saving the Cart, we can send it
    res.status(200).json(savedCart);

    //
  } catch (err) {
    res.status(500).json(err);
  }
  //
});
//
//
//
//---------------------------------
//            UPDATE
//---------------------------------
//
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  //

  try {
    const updatedCart = await Cart.findByIdAndUpdate(
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
    res.status(200).json(updatedCart);
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
  //  that specific Cart/ and all the
  // schema data that this Cart contains
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//

//---------------------------------
//           GET user Cart
//
//---------------------------------
//

//
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    // Find the cart(you need of specific .findOne() instead of
    // find(), because every user has just 1 cart
    const cart = await Product.findOne({ userId: req.params.userId });

    //._doc; will grab the user data from the object in mongoDb
    res.status(200).json({ cart });
  } catch (err) {
    res.status(500).json(err);
  }
});

//
//
//---------------------------------
//           GET all
//---------------------------------
//here only admin can reach this data
// Because we are going to see all carts of ALL users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  //
  //
  //
  try {
    const carts = await Cart.find();
    //response successful 200 and will send/show all carts
    res.status(200).json(carts);

    //
  } catch (err) {
    res.status(500).json(err);
  }

  //
  //
});

module.exports = router;
