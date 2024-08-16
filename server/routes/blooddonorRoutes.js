const express = require('express');
const router = express.Router();
const blooddonorController = require('../controllers/blooddonorController');

// GET route to check and retrieve blood donors
router.get('/check/:city?', blooddonorController.getBloodDonorsAndCities);

// Route to add a new donor
router.post('/add', blooddonorController.addDonor);

module.exports = router;
