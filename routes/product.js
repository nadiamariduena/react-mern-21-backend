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
//---------------------------------
//            UPDATE
//---------------------------------
//
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  //

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
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
    res.status(200).json(updatedProduct);
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
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
  //
  // Here we will find and delete
  //  that specific Product/ and all the
  // schema data that this Product contains
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//

//---------------------------------
//           GET product
//
//---------------------------------
//

//
router.get("/find/:id", async (req, res) => {
  try {
    // Find the user(you need of specific .findById() method to find it)
    const product = await Product.findById(req.params.id);

    //._doc; will grab the user data from the object in mongoDb
    res.status(200).json({ product });
  } catch (err) {
    res.status(500).json(err);
  }
});

//
//
//---------------------------------
//           GET all products
//---------------------------------
//
router.get("/", async (req, res) => {
  //
  // qNew stands for queryNew
  // const query = req.query.new;
  // 1 fetching the data with this vars
  const qNew = req.query.new;
  const qCategory = req.query.category;

  try {
    //2 creating the array
    let products;

    //3
    //if there is a query and if this 'qNew', then...
    if (qNew) {
      //4 my products will be ... createdAt '-1 current years' and the limit will be 5 products
      products = await Product.find().sort({ createdAt: -1 }).limit(5);
      //5 if the query isnt qNew, if its query category: qCategory, then
    } else if (qCategory) {
      //6 my products will be ({categories})
      products = await Product.find({
        //7
        categories: {
          //8
          $in: [qCategory],
        },
      });
      //9
    } else {
      //10 so if there is not specific query by the user,
      // the outcome will be all the products
      products = await Product.find();
    }

    //
    //
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
