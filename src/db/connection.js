const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
    try {
        console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI
        );
        console.log("Connected to Database");
    } catch (error) {
        console.log("Database connection error:", error);
    }
}

module.exports = connectDB;
