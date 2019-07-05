const mongoose = require("mongoose");

const Comments = mongoose.model("Comments", {
  id:String,
  dishId:Number,
  rating: Number,
  comment: String,
  author: String,
  date:String,
});

module.exports = {
  Comments
}