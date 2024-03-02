const {
  addUserToDatabase,
  removeUserFromDatabase,
  updateUserFromDatabase,
  checkUserExists,
} = require("../services/user.service");
const { messages } = require("../common/config/messages");
const { FAILED_TO_PROCESS_REQUEST, INTERNAL_SERVER_ERROR } = messages.COMMON;
const { RUNTIME_ERROR } = messages.ERROR;
const { USER_CREATED, USER_DELETED, USER_LOGIN_SUCCESS, USER_UPDATED } =
  messages.USER;
const statusCodes = require("../common/config/status-codes");
const { CREATED, SUCCESS, INVALID_REQUEST, INTERNAL_SERVER } = statusCodes;

const addUser = async (req, res) => {
  try {
    const response = await addUserToDatabase(req.body);
    if (response) {
      return res.status(CREATED).json({
        statusCode: CREATED,
        message: `${USER_CREATED}`,
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
    return res.status(INTERNAL_SERVER).json({
      statusCode: INTERNAL_SERVER,
      message: `${RUNTIME_ERROR} ${error}`,
      error: `${INTERNAL_SERVER_ERROR}`,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const response = await removeUserFromDatabase(req.body);
    if (response) {
      return res.status(SUCCESS).json({
        statusCode: CREATED,
        message: `${USER_DELETED}`,
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
    return res.status(INTERNAL_SERVER).json({
      statusCode: INTERNAL_SERVER,
      message: `${RUNTIME_ERROR} ${error}`,
      error: `${INTERNAL_SERVER_ERROR}`,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const response = await updateUserFromDatabase(req.body);
    if (response) {
      return res.status(SUCCESS).json({
        statusCode: CREATED,
        message: `${USER_UPDATED}`,
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
    return res.status(INTERNAL_SERVER).json({
      statusCode: INTERNAL_SERVER,
      message: `${RUNTIME_ERROR} ${error}`,
      error: `${INTERNAL_SERVER_ERROR}`,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const response = await checkUserExists(req.body);
    if (response) {
      return res.status(SUCCESS).json({
        statusCode: CREATED,
        message: `${USER_LOGIN_SUCCESS}`,
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
    return res.status(INTERNAL_SERVER).json({
      statusCode: INTERNAL_SERVER,
      message: `${RUNTIME_ERROR} ${error}`,
      error: `${INTERNAL_SERVER_ERROR}`,
    });
  }
};

module.exports = {
  addUser,
  updateUser,
  deleteUser,
  loginUser,
};
