const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array }, //because it can have more than 1 category
    size: { type: String }, //this will change from string to array in the 3 part of the tutorial
    color: { type: String }, //this will change from string to array in the 3 part of the tutorial
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
