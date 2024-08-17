const BloodBank = require('../models/bloodbank');
const City = require('../models/city');
const Cordinates = require('../models/cordinates');

exports.getBloodBanks = async (req, res) => {
  try {
    let filter = {}; // Initialize an empty filter object

    const city = req.params.city;
    if (city) {
      // If city parameter is not empty, apply the filter
      filter = { city: city };
    }

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const totalBloodBanks = await BloodBank.countDocuments(filter);
    const bloodBanks = await BloodBank.find(filter).skip(skip).limit(limit);
    const totalPages = Math.ceil(totalBloodBanks / limit);

    const citys = await City.find();
    const cordinates = await Cordinates.find();

    var cities = [];

    for (const city of citys) {
      cities.push(city.toJSON().city);
    }

    res.json({
      bloodBanks,
      cities,
      cordinates,
      pagination: { totalPages, currentPage: page },
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving blood banks');
  }
};


exports.addBloodBank = (req, res) => {
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
};

exports.getBloodBankDetails = async (req, res) => {
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
};
