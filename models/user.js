const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  picture: String,
  googleId: String,
  thumbnail: String,
  accessToken: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;
