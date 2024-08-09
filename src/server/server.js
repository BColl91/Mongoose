// Import necessary modules
const express = require('express'); // Framework for building web applications
const connectDB = require('../db/connection'); // Database connection file
const bookRoutes = require("../db/routes/bookroutes"); // Book routes file
require('dotenv').config(); // Loads environment variables from a .env file

// Create an instance of an Express application
const app = express();

// Set the port the server will listen on, using the PORT environment variable or 5001 as a fallback
const port = process.env.PORT || 5001;

// Connect to the database
connectDB();

// Middleware to parse incoming JSON data
app.use(express.json());

// Define the routes for handling book-related API requests
app.use('/api/books', bookRoutes);

// Route to add a new book to the database
app.post("/api/books/add", async (req, res) => {
    try {
        // Extract book details from the request body
        const { title, author, genre, publishedYear } = req.body;
        
        // Create a new book instance with the provided details
        const book = new Book({ title, author, genre, publishedYear });
        
        // Save the book to the database
        await book.save();
        
        // Send a response indicating the book was successfully added
        res.status(201).json({ message: `Book ${title} has been added`, book });
    } catch (error) {
        // Handle errors and send a response if something goes wrong
        res.status(400).json({ message: `Book cannot be added`, error: error.message });
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});

// The following routes are placeholders for listing, updating, and deleting books
// You can implement them as needed:

// READ = list all books in database
// app.get("/listBooks", async (req, res) => {
//     // Add code here to list all books
// });

// // UPDATE = update the author and genre of a book
// app.get("/updateBooks", async (req, res) => {
//     // Add code here to update a book
// });

// // DELETE = Remove a book from database
// app.get("/delBook", async (req, res) => {
//     // Add code here to remove a book
// });
