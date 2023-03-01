const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
    bookName: String,
    price: Number,
    noOfPages: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", BookSchema);
