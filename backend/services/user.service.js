const User = require("../common/models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { USER_IDENTIFIER_STATUS } = require("../common/config/constants");
const { INVALID_USER, INVALID_PASSWORD } = USER_IDENTIFIER_STATUS;

const addUserToDatabase = async (data) => {
  try {
    const { username, password, role } = data;
    const user = new Event({ username, role, password });
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const removeUserFromDatabase = async (userId) => {
  try {
    const result = await User.findOneAndDelete({ _id: userId });
    return result;
  } catch (error) {
    throw error;
  }
};

const updateUserFromDatabase = async (data) => {
  try {
    const result = await User.findOneAndUpdate(
      { _id: data.userId },
      { $set: data }
    );
    return result;
  } catch (error) {
    throw error;
  }
};

const checkUserExists = async (data) => {
  try {
    const { username, password } = data;
    const user = await User.findOne({ username: username });
    if (!user) {
      return INVALID_USER;
    }
    if (!bcrypt.compareSync(password, user.password)) {
      return INVALID_PASSWORD;
    }
    const token = jwt.sign(
      { id: user.id, username: user.username, role: user.role },
      JWT_SECRET,
      { expiresIn: "1h" }
    );
    return [
      {
        token,
      },
    ];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addUserToDatabase,
  removeUserFromDatabase,
  updateUserFromDatabase,
  checkUserExists,
};
