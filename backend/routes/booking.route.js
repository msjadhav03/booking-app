const router = require("express").Router();
const { addBooking } = require("../controllers/booking.controller");
const { API_URL } = require("../common/config/constants");

/**
 * Below routes are responsible for handling booking requests
 */
router.post(`${API_URL.ADD_BOOKING}`, addBooking);

module.exports = router;
