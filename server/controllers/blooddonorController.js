const BloodDonor = require('../models/Donor');
const City = require('../models/city');
const Coordinates = require('../models/cordinates'); // Corrected typo

// Renamed function for better clarity
exports.getBloodDonorsAndCities = async (req, res) => {
    try {
        const city = req.params.city;
        const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
        const limit = parseInt(req.query.limit) || 15; // Default to 15 items per page if not provided
        const skip = (page - 1) * limit; // Calculate the number of items to skip

        const filter = city ? { city } : {}; // Apply filter if city is provided

        // Fetch blood donors with pagination
        const bloodDonors = await BloodDonor.find(filter)
            .skip(skip)
            .limit(limit);
        console.log(bloodDonors)
        // Fetch total number of blood donors for pagination
        const totalDonors = await BloodDonor.countDocuments(filter);

        // Fetch cities and coordinates
        const cities = await City.find();
        // console.log(cities);
        const coordinates = await Coordinates.find(); 

        // Extract data for response
        const cityNames = cities.map(e => e.city);
        const donorNames = bloodDonors.map(donor => donor.Name);
        const donorContacts = bloodDonors.map(donor => donor.Contact);
        const donorLocations = bloodDonors.map(donor => donor.Location);
        const donorBloodGroups = bloodDonors.map(donor => donor['Blood Group']);

        // Calculate total pages
        const totalPages = Math.ceil(totalDonors / limit);

        // Send the response
        res.json({
            bloodDonors,
            cities,
            cityNames,
            coordinates,
            donorNames,
            donorContacts,
            donorLocations,
            donorBloodGroups,
            pagination: {
                currentPage: page,
                totalPages,
                totalDonors
            }
        });
    } catch (err) {
        console.error('Error retrieving data:', err);
        res.status(500).send('Error retrieving blood donors');
    }
};


exports.addDonor = async (req, res) => {
    const { name, contact, location, gender, age, bloodGroup, district, city } = req.body;

    // Basic validation
    if (!name || !contact || !location || !gender || !age || !bloodGroup || !district || !city) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Create a new donor instance
        const newDonor = new BloodDonor({
            name,
            contact,
            location,
            gender,
            age,
            bloodGroup,
            district,
            city
        });

        // Save the donor to the database
        await newDonor.save();

        // Respond with success
        res.status(201).json({ message: 'Donor added successfully', donor: newDonor });
    } catch (err) {
        // Handle errors
        console.error('Error adding donor:', err);
        res.status(500).json({ message: 'Error adding donor', error: err.message });
    }
};
