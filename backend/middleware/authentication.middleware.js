const { statusCodes } = require("../common/config/status-codes");
const { AUTH_ERROR, INVALID_TOKEN } = statusCodes;
const authenticateUser = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token)
    return res.status(AUTH_ERROR).json({
      statusCode: AUTH_ERROR,
      message: "Authorization token is required.",
      data: [],
    });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(INVALID_TOKEN)
      .json({ statusCode: INVALID_TOKEN, message: "Invalid token.", data: [] });
  }
};

module.exports = {
  authenticateUser,
};
