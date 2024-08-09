// Import the Mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Load environment variables from a .env file
require("dotenv").config();

// Function to connect to the database
async function connectDB() {
    try {
        // Print the MongoDB connection URI (optional, for debugging)
        console.log(process.env.MONGO_URI);
        
        // Connect to the MongoDB database using the connection URI from the environment variables
        await mongoose.connect(process.env.MONGO_URI);
        
        // Print a message indicating a successful connection
        console.log("Connected to Database");
    } catch (error) {
        // Handle errors and print an error message if the connection fails
        console.log("Database connection error:", error);
    }
}

// Export the connectDB function so it can be used in other files
module.exports = connectDB;
