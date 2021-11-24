const Order = require("../models/Order");

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
  const newOrder = new Order(req.body);
  //
  try {
    // Here we will save the Order
    const savedOrder = await newOrder.save();
    // After saving the Order, we can send it
    res.status(200).json(savedOrder);

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
//only admin can update order
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
  //

  try {
    const updatedOrder = await Order.findByIdAndUpdate(
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
    res.status(200).json(updatedOrder);
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
  //  that specific Order/ and all the
  // schema data that this Order contains
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
//

//---------------------------------
//           GET user Orders
//
//---------------------------------
//

//
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
  try {
    // Find the cart(you need of specific .find() instead of
    // findOne(), because user can have MULTIPLE orders
    const orders = await Order.find({ userId: req.params.userId });

    //._doc; will grab the order data from the object in mongoDb
    res.status(200).json({ orders });
  } catch (err) {
    res.status(500).json(err);
  }
});

//
//
//---------------------------------
//           GET all orders
//---------------------------------
//here only admin can reach this data
// Because we are going to see all carts of ALL users
router.get("/", verifyTokenAndAdmin, async (req, res) => {
  //
  //
  //
  try {
    const orders = await Order.find();
    //response successful 200 and will send/show all orders
    res.status(200).json(orders);

    //
  } catch (err) {
    res.status(500).json(err);
  }

  //
  //
});

//
//
//
//---------------------------------
//        GET MONTHLY INCOME
//---------------------------------
//
// In this section we will compare our income
//
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
  // we will compare our income depending of the month
  //1 lets say the current is november
  const date = new Date();
  //2. the below is going to be October
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  // and we also need the PREVIOUS month
  //   3 this is going to be September
  //and as you can see the 3 step connects to the 2 and the second to the 1
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  //now lets a try and catch and AGGREGATE THE DATA
  try {
    //4
    const income = await Order.aggregate([
      //the condition is: createdAt, because if you see
      // the object in mongo, every user has an update, and in the
      // condition we are going to say less than today and 'greater $gte' than last year
      //gte: greater than.
      //5
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        //6
        $project: {
          // take the month number, inside the created update
          //7
          month: { $month: "$createdAt" },
          //additionally we will add sales
          //8
          sales: "$amount", // the amount is inside the order schema
        },
      },
      {
        $group: {
          //group the AMOUNT
          //9
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
  //
});
//
//

module.exports = router;
