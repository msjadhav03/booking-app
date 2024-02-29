const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: { type: String, required: true },
  event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
