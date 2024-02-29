const { addBookingEntryToDatabase } = require("../services/booking.service");
const { messages } = require("../common/config/messages");
const { FAILED_TO_PROCESS_REQUEST, INTERNAL_SERVER_ERROR } = messages.COMMON;
const { RUNTIME_ERROR } = messages.ERROR;
const { BOOKING_SUCCESS } = messages.BOOKING;
const statusCodes = require("../common/config/status-codes");
const { CREATED, INVALID_REQUEST, INTERNAL_SERVER } = statusCodes;

/**
 * Below function is responsible for create new booking
 * @param {*} req
 * @param {*} res
 * @returns
 */
const addBooking = async (req, res) => {
  try {
    const response = await addBookingEntryToDatabase(req.body);
    if (response) {
      return res.status(CREATED).json({
        statusCode: CREATED,
        message: `${BOOKING_SUCCESS}`,
        data: response,
      });
    }
    return res.status(INVALID_REQUEST).json({
      statusCode: INVALID_REQUEST,
      message: ` ${FAILED_TO_PROCESS_REQUEST}`,
      data: [],
    });
  } catch (error) {
    console.error(error);
    res.status(INTERNAL_SERVER).json({
      statusCode: INTERNAL_SERVER,
      message: `${RUNTIME_ERROR} ${error}`,
      error: `${INTERNAL_SERVER_ERROR}`,
    });
  }
};

module.exports = {
  addBooking,
};
