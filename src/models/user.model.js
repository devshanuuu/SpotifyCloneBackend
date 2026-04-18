const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
      username: {
        type: String,
        unique: true,
        required: trusted
      },
      email: {
        type: String,
        unique: true,
        required: true
      },
      password: {
        type: String,
        required: true
      },
      role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
      }
})

const userModel = mongoose.model('user', userSchema);

model.exports = userModel;