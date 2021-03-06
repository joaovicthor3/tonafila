const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  pictureURL: String,
  googleId: String,
  thumbnail: String,
  accessToken: String,
  id: String
});

const User = mongoose.model('user', userSchema);

module.exports = User;
