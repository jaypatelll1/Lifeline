// models/Donor.js
const mongoose = require('mongoose');

const donorSchema = new mongoose.Schema({
  name: String,
  bloodGroup: String,
  location: String,
  contact: String,
});

module.exports = mongoose.model('Donor', donorSchema ,'blood');
