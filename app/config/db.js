const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const MONGO_URI = process.env.MONGO_URI;

// console.log('MONGO_URI:', MONGO_URI); 

const connectDB = async () => {
    try {
        if (!MONGO_URI) throw new Error('MONGO_URI is not defined in the .env file');
        
        // Remove the deprecated options
        await mongoose.connect(MONGO_URI);

        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1); // Exit on failure
    }
};

module.exports = connectDB;
