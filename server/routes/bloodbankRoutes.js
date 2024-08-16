const express = require('express');
const router = express.Router();
const bloodbankController = require('../controllers/bloodbankController');

// Add CORS header to all responses
router.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

// GET route to render the blood bank page
router.get('/op/:city?', bloodbankController.getBloodBanks);

// POST route to add a new blood bank
router.post('/', bloodbankController.addBloodBank);

// GET route to retrieve more details for a specific blood bank based on its ID
router.get('/details/:id', bloodbankController.getBloodBankDetails);

module.exports = router;
