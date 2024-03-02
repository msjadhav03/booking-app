const API_URL = {
  ADD_BOOKING: "/api/bookings",
  ADD_EVENT: "/api/events",
  ADD_USER: "api/user",
  LOGIN_USER: "api/login",
};

const USER_IDENTIFIER_STATUS = {
  INVALID_USER: 1,
  INVALID_PASSWORD: 2,
};

const USER_TYPE = {
  EVENT_ORIGANIZER: "organizer",
  GENERAL: "general",
};
const API_VERISON = "/V1/";

module.exports = {
  API_URL,
  API_VERISON,
  USER_IDENTIFIER_STATUS,
  USER_TYPE,
};
