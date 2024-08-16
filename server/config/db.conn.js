const mongoose = require('mongoose');
require('dotenv').config();

exports.dbConnect = () => {
    try {
        mongoose.connect(process.env.DATABASE_URL);
        console.log("Database Connection Successfully Established");
    } catch (error) {
        console.log("Error while connecting with Database ", error);
    }
}