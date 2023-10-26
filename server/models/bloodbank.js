const mongoose = require('mongoose');

const bloodBankSchema = new mongoose.Schema({
    name: String,
    district: String,
    city: String,
    address: String,
    pincode: String,
    phone: String,
  }, {
    collection: 'banks',
  });
  


const BloodBank = mongoose.model('BloodBank', bloodBankSchema);

module.exports = BloodBank;
