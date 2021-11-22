const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("./verifyToken");

const router = require("express").Router();

//---------------------------------
//             CREATE
//---------------------------------
//
//
// Here we will require the 'verifyTokenAndAdmin', because only the ADMIN can create a product.
//
router.post("/", verifyTokenAndAdmin, async (req, res) => {
  //
  //
  const newProduct = new Product(req.body);
  //
  try {
    // Here we will save the product
    const savedProduct = await newProduct.save();
    // After saving the product, we can send it
    res.status(200).json(savedProduct);

    //
  } catch (err) {
    res.status(500).json(err);
  }
  //
});
//
//

module.exports = router;
