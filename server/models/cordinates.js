const mongoose = require('mongoose');

const bloodBankSchema = new mongoose.Schema({
  name: String,
  latitude: String,
  longitute: String,
}, {
  collection: 'cordinates',
});

const cordinates = mongoose.model('cordinates', bloodBankSchema);

module.exports = cordinates;
