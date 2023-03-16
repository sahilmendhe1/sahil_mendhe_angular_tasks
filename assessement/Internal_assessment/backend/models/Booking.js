const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  movieName: {
    type: String,
    required: false,
  },
  noOfTickets: {
    type: Number,
    required: false,
  },
  date: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
