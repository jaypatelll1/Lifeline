const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

const bloodSchema = new mongoose.Schema({
  name: String,
  phone: String,
  location: String,
  gender: String,
  age: String,
  bloodGroup: String,
  district: String,
  city: String,
});

const Blood = mongoose.model('Blood', bloodSchema);
console.log("yes")
// Handle form submission
app.get('/submit', async (req, res) => {
  const formData = req.body;
  // const newDonor = new Blood(formData);

  // try {
  //   await newDonor.save();
  //   res.send('Data saved successfully.');
  // } catch (err) {
  //   console.error(err);
  //   res.send('Error saving data.');
  // }
  res.json("Faiz");
});

module.exports = router;