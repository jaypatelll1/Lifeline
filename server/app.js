const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 9000;
const cors = require('cors');

// Add CORS header to all responses
app.use(cors());
// Set up static files and EJS for rendering HTML
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Connect to MongoDB
mongoose.connect('mongodb+srv://vaibhavraut087:Tsm%402020@cluster0.nciuo9g.mongodb.net/newdata', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.once('open', () => {
  console.log('MongoDB is connected');
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

// Import and use Blood Bank and Blood Donor routes
const bloodBankRoutes = require('./routes/bloodbankRoutes');
const bloodDonorRoutes = require('./routes/blooddonorRoutes');
const formDataSubmitRoutes = require('./routes/formDataSubmitRoutes');

app.use('/bloodbanks', bloodBankRoutes);
app.use('/donors', bloodDonorRoutes);
app.use('/form/submit', formDataSubmitRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
