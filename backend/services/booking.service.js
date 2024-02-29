const Event = require("../common/models/Events");
const Booking = require("../common/models/Booking");

/**
 * Below function is responsible for create new entry of booking per user to the database
 * @param {*} data
 * @returns
 */
const addBookingEntryToDatabase = async (data) => {
  try {
    const { user, eventId } = data;
    const event = await Event.findById(eventId);
    if (!event) {
      return false;
    }
    if (event.bookings.length >= event.capacity) {
      return false;
    }
    const booking = new Booking({ user, event: eventId });
    await booking.save();
    event.bookings.push(booking._id);
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
