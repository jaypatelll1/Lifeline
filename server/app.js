const express = require('express');
const mongoose = require('mongoose');
const { dbConnect } = require('./config/db.conn');
const app = express();
const PORT = process.env.PORT || 9000;
const cors = require('cors');
require('dotenv').config();

// Import and use Blood Bank and Blood Donor routes
const bloodBankRoutes = require('./routes/bloodbankRoutes');
const bloodDonorRoutes = require('./routes/blooddonorRoutes');

// Add CORS header to all responses
app.use(
  cors({
      origin: '*',
      credentials: true,
  })
)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
dbConnect();

app.use('/bloodbanks', bloodBankRoutes);
app.use('/donors', bloodDonorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
