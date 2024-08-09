// Import the Mongoose library to interact with MongoDB
const mongoose = require("mongoose");

// Define the schema (structure) for the Book model
const bookSchema = new mongoose.Schema({
    title: {
        type: String, // Title of the book is a string
        required: true, // Title is required
        unique: true // Title must be unique (no two books can have the same title)
    },
    author: {
        type: String, // Author of the book is a string
        required: false // Author is optional
    },
    genre: {
        type: String, // Genre of the book is a string
        required: false // Genre is optional
    },
    publishedYear: {
        type: Number, // Published year is a number
        required: false // Published year is optional
    }
});

// Create a model based on the schema to interact with the books collection in the database
const Book = mongoose.model('Book', bookSchema);

// Export the Book model so it can be used in other files
module.exports = Book;
