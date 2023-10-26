const express = require('express');
const app = express();

const router = express.Router();
const BloodDonor = require('../models/Donor'); // Replace 'Donor' with 'Blood'
const City = require('../models/city'); 


router.get('/check/:city?', async (req, res) => {
  try {
    let filter = {};  // Initialize an empty filter object

  const city = req.params.city;
  if (city) {
    // If city parameter is not empty, apply the filter
    filter = { city: city };
  }
    const bloodDonors = await BloodDonor.find(filter); // Update the data fetching

    const cities = await City.find()

    var newcities = []
    var name = []
    var contact = []
    var location = []
    var blood = []

    for (const city of cities){
      console.log( city.toJSON().city)
      newcities.push(city.toJSON().city)
    }

    for (const city of bloodDonors){
      // console.log( city.toJSON())
      name.push(city.toJSON().Name)
      // console.log( city.toJSON().Name)
      contact.push(city.toJSON().Contact)
      // console.log( city.toJSON().Contact)
      location.push(city.toJSON().Location)
      // console.log( city.toJSON().Location)
      blood.push(city.toJSON()['Blood Group'])
      // console.log( city.toJSON()['Blood Group'])
    }


    // res.render('donorsPage', { bloodDonors, cities,newcities,name,contact,location,blood }); // Update the variable name to 'bloodDonors'
    res.json({ bloodDonors, cities,newcities,name,contact,location,blood });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving blood donors');
  }
});

module.exports = router;
