const mongoose = require("mongoose");

const Dishes = mongoose.model("Dish", {
  id:Number,
  name: String,
  category: String,
  label: String,
  price: String,
  description: String,
  comments: Array
});

module.exports = {
  Dishes
}