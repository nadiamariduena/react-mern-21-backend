const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  // This will be used after purchasing the Items
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount: { type: Number, required: true },
    //BELOW:its not going to be type:String because at that point
    // We will be using STRIPE, and its going to give us an object with
    // different lines/fields, similar to what i had here.
    // CHECK the Readme:for schemas
    address: { type: Object, required: true }, //after purchasing we will need user address
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);


