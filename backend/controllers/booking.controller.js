const { addBookingEntryToDatabase } = require("../services/booking.service");
const { messages } = require("../common/config/messages");
const {
  FAILED_TO_PROCESS_REQUEST,
  EVENT_NOT_IDENTIFIED,
  EVENT_OUT_OF_CAPACITY,
  INTERNAL_SERVER_ERROR,
} = messages.COMMON;
const { RUNTIME_ERROR } = messages.ERROR;
const { BOOKING_SUCCESS } = messages.BOOKING;
const statusCodes = require("../common/config/status-codes");
const { CREATED, INVALID_REQUEST, INTERNAL_SERVER } = statusCodes;
const { EVENT_ERRORS } = require("../common/config/constants");
/**
 * Below function is responsible for create new booking
 * @param {*} req
 * @param {*} res
 * @returns
 */
const addBooking = async (req, res) => {
  try {
    const response = await addBookingEntryToDatabase(req.body);
    if (response === EVENT_ERRORS.EVENT_NOTFOUND) {
      return res.status(400).json({
        statusCode: INVALID_REQUEST,
        message: ` ${EVENT_NOT_IDENTIFIED}`,
        data: [],
      });
    }
    if (response === EVENT_ERRORS.OUT_OF_CAPACITY) {
      return res.status(400).json({
        statusCode: INVALID_REQUEST,
        message: ` ${EVENT_OUT_OF_CAPACITY}`,
        data: [],
      });
    }
    if (response) {
      return res.status(201).json({
        statusCode: CREATED,
        message: `${BOOKING_SUCCESS}`,
        data: response,
      });
    }
    return res.status(400).json({
      statusCode: INVALID_REQUEST,
      message: ` ${FAILED_TO_PROCESS_REQUEST}`,
      data: [],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      statusCode: INTERNAL_SERVER,
      message: `${RUNTIME_ERROR} ${error}`,
      error: `${INTERNAL_SERVER_ERROR}`,
    });
  }
};

module.exports = {
  addBooking,
};
