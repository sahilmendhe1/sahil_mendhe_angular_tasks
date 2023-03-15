const Booking = require("../models/booking");

module.exports = {
  bookings: async function () {
    const bookings = await Booking.find();
    return {
      bookings: bookings.map((q) => {
        return {
          ...q._doc,
          _id: q._id.toString(),
        };
      }),
    };
  },
  getBooking: async function () {
    const getBooking = await Booking.find();
    return {
      bookings: getBooking.map((q) => {
        return {
          ...q._doc,
          _id: q._id.toString(),
        };
      }),
    };
  },
  addBooking: async function ({ bookingInput }) {
    const booking = new Booking({
      movieName: bookingInput.movieName,
      noOfTickets: bookingInput.noOfTickets,
      date: bookingInput.date,
    });
    const createdBooking = await booking.save();
    return {
      ...createdBooking._doc,
      _id: createdBooking._id.toString(),
    };
  },

  updateBooking: async function ({ _id, bookingInput }) {
    const booking = await Booking.findById(_id);
    if (!booking) {
      throw new Error("Booking not found");
    }
    booking.movieName = bookingInput.movieName;
    booking.noOfTickets = bookingInput.noOfTickets;
    booking.date = bookingInput.date;
    const updateBooking = await booking.save();
    return {
      ...updateBooking._doc,
      _id: updateBooking._id.toString(),
    };
  },
  deleteBooking: async function ({ _id }) {
    const booking = await Booking.findOneAndDelete(_id);
    if (!booking) {
      throw new Error("Booking not found");
    }
    await Booking.findByIdAndRemove(_id);
    return {
      ...booking._doc,
      _id: booking._id,
    };
    console.log(booking);
    return booking;
  },
};
