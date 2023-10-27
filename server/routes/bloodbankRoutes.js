const express = require('express');
const router = express.Router();
const BloodBank = require('../models/bloodbank');
const City = require('../models/city');
const Cordinates = require('../models/cordinates');
const app = express();

// Add CORS header to all responses
router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});


// GET route to render the blood bank page
router.get('/op/:city?', async (req, res) => {
  try {
    //const city=req.params.city
    let filter = {}; // Initialize an empty filter object

    const city = req.params.city;
    if (city) {
      // If city parameter is not empty, apply the filter
      filter = { city: city };
    }

    const bloodBanks = await BloodBank.find(filter);

    const citys = await City.find();
    const cordinates = await Cordinates.find();

    var cities = [];

    for (const city of citys) {
      cities.push(city.toJSON().city);
    }

    res.json({bloodBanks, cities, cordinates});
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving blood banks');
  }

});

// POST route to add a new blood bank
router.post('/', (req, res) => {
  const { name, district, city, address, pincode, phone } = req.body;
  const newBloodBank = new BloodBank({
    name,
    district,
    city,
    address,
    pincode,
    phone,
  });

  newBloodBank
    .save()
    .then((bloodBank) => {
      res.redirect('/bloodbanks/op');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error adding blood bank');
    });
});

// GET route to retrieve more details for a specific blood bank based on its ID
router.get('/details/:id', async (req, res) => {
  try {
    const bloodBankId = req.params.id;
    const bloodBank = await BloodBank.findById(bloodBankId);

    if (!bloodBank) {
      return res.status(404).send('Blood bank not found');
    }

    res.json(bloodBank);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving blood bank details');
  }
});

module.exports = router;
