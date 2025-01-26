const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // Ensure role is either 'user' or 'admin'
    default: 'user', // Default to 'user' if no role is provided
  },
});


const User = mongoose.model("User", UserSchema);
module.exports = User;
