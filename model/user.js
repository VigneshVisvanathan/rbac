const mongoose = require("mongoose");



const UserSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
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
  userType: {
    type: String,
    enum: ["ADMIN", "USER"],
  },
});

const User = mongoose.model('user',UserSchema);

module.exports = { User }