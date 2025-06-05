// filepath: e:\my-pharmacy-app\backend\models\User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  phone: { 
    type: String, 
    required: true 
  },
  addresses: [{
    title: String,
    location: {
      type: { type: String, default: 'Point' },
      coordinates: [Number]
    },
    details: String
  }]
}, { 
  timestamps: true 
});

module.exports = mongoose.model('User', userSchema);