const express = require('express');
const router = express.Router();
const BloodBank = require('../models/bloodbank');
const City = require('../models/city');

// GET route to render the blood bank page
router.get('/op/:city?', async (req, res) => {
  try {
    //const city=req.params.city
    let filter = {};  // Initialize an empty filter object

  const city = req.params.city;
  if (city) {
    // If city parameter is not empty, apply the filter
    filter = { city: city };
  }
    const bloodBanks = await BloodBank.find(filter);
    
    const citys = await City.find();

    var cities = [];

    for (const city of citys) {
      cities.push(city.toJSON().city);
    }

    res.render('bloodbank', { bloodBanks, cities });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving blood banks');
  }
});

// GET route for filtering blood banks based on district and city
router.get('/filter', async (req, res) => {
  // Extract district and city from query parameters
  
  const city = req.query.city;

  try {
    let bloodBanks;

    if (district === 'Select District' && city === 'Select City') {
      // If both district and city are set to their defaults, fetch all blood banks
      bloodBanks = await BloodBank.find();
    } else if (district === 'Select District') {
      // If only city is selected, filter by city
      bloodBanks = await BloodBank.find({ city });
    } else if (city === 'Select City') {
      // If only district is selected, filter by district
      bloodBanks = await BloodBank.find({ district });
    } else {
      // If both district and city are selected, filter by both
      bloodBanks = await BloodBank.find({ district, city });
    }

    // Fetch the list of cities (you can optimize this if the list is static)
    const cities = await City.find();

    // Render the 'bloodbank' EJS template with filtered data and the list of cities
    res.render('bloodbank', { bloodBanks, cities });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error filtering blood banks');
  }
});

// POST route to add a new blood bank
router.post('/', (req, res) => {
  const { name, district, city, address, pincode, phone } = req.body;
  const newBloodBank = new BloodBank({ name, district, city, address, pincode, phone });

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
