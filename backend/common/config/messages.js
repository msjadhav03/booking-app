const messages = {
  COMMON: {
    FAILED_TO_PROCESS_REQUEST: "Failed to process request body",
    INTERNAL_SERVER_ERROR: "Internal server error",
  },
  EVENT: {
    EVENT_CREATED: "Event has been created successfully",
    EVENT_FETCHED: "Success : Fetched all the events",
    EVENT_UPDATED: "Update: Event has been updated",
    EVENT_DELETED: "Removal: Event has been removed",
  },
  BOOKING: {
    BOOKING_SUCCESS: "Booking Success",
  },
  USER: {
    USER_CREATED: "User created Successfully",
    USER_UPDATED: "User updated Successfully",
    USER_DELETED: "User Deleted Successfully",
    USER_LOGIN_SUCCESS: "User Logged Successfully",
  },
  ERROR: {
    RUNTIME_ERROR: "Runtime error occurred",
    FORBIDDEN: "Access has been forbidden",
  },
  DATABASE: {
    DATABASE_SUCCESS_CONNECTION: "Connected Successfully to MongoDB",
    DATABASE_FAILED_CONNECTION: "MongoDB connection error:",
  },
};
module.exports = { messages };
