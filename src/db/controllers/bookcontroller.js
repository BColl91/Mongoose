// Import the Book model to interact with the books collection in the database
const Book = require('../models/bookmodels');

// Function to list all books (READ)
exports.listBooks = async (req, res) => {
    try {
        // Find all books in the database
        const books = await Book.find();
        
        // Send the list of books as a response
        res.status(200).json(books);
    } catch (error) {
        // Handle errors and send a response if something goes wrong
        res.status(500).json({ message: error.message });
    }
};

// Function to update a book's author and genre (UPDATE)
exports.updateBooks = async (req, res) => {
    const { title, author, genre } = req.body; // Get the title, author, and genre from the request body
    try {
        // Find a book by title and update its author and genre
        const book = await Book.findOneAndUpdate({title: req.body.title}, {
            author: req.body.author, 
            genre: req.body.genre
        });
        
        // If the book is not found, send a 404 response
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        
        // Send the updated book as a response
        res.status(200).json(book);
    } catch (error) {
        // Handle errors and send a response if something goes wrong
        res.status(500).json({ message: error.message });
    }
};

// Function to delete a book (DELETE)
exports.delBook = async (req, res) => {
    const { id } = req.query; // Get the book's ID from the query parameters
    try {
        // Find a book by title and delete it
        const book = await Book.findOneAndDelete({title: req.body.title});
        
        // If the book is not found, send a 404 response
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        
        // Send a success message as a response
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        // Handle errors and send a response if something goes wrong
        res.status(500).json({ message: error.message });
    }
};

// Function to add a new book (CREATE)
exports.addBook = async (req, res) => {
    try {
        // Get the book details from the request body
        const { title, author, genre, publishedYear } = req.body;
        
        // Create a new book instance
        const book = new Book({ title, author, genre, publishedYear });
        
        // Save the book to the database
        await book.save();
        
        // Send a response indicating the book was successfully added
        res.status(201).json({ message: `Book ${title} has been added`, book });
    } catch (error) {
        // Handle errors and send a response if something goes wrong
        res.status(400).json({ message: `Book cannot be added`, error: error.message });
    }
};
