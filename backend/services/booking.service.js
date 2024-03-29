const Event = require("../common/models/Events");
const Booking = require("../common/models/Booking");
const { EVENT_ERRORS } = require("../common/config/constants");

/**
 * Below function is responsible for create new entry of booking per user to the database
 * @param {*} data
 * @returns
 */
const addBookingEntryToDatabase = async (data) => {
  try {
    const { user, eventId, noOfTickets } = data;
    try {
      await Event.findById(eventId);
    } catch (error) {
      return EVENT_ERRORS.EVENT_NOTFOUND;
    }
    if (!event) {
      return EVENT_ERRORS.EVENT_NOTFOUND;
    }
    if (event.bookings.length >= event.capacity) {
      return EVENT_ERRORS.OUT_OF_CAPACITY;
    }
    const booking = new Booking({ user, event: eventId });
    await booking.save();
    const event = await Event.findById(eventId);
    event.bookings.push(booking._id);
    event.capacity = event.capacity - noOfTickets;
    await event.save();
    return event;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = {
  addBookingEntryToDatabase,
};
