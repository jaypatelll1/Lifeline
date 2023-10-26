

const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
  name: String, 
  
});

const City = mongoose.model('City', citySchema);

module.exports = City;