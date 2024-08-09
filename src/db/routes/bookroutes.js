// Import necessary modules
const express = require('express'); // Framework for building web applications
const router = express.Router(); // Create a router object to handle routes
const bookController = require('../controllers/bookcontroller'); // Import the book controller

// Route to list all books, handled by the listBooks function in the bookController
router.get('/listBooks', bookController.listBooks);

// Route to update a book, handled by the updateBooks function in the bookController
router.put('/updateBooks', bookController.updateBooks);

// Route to delete a book, handled by the delBook function in the bookController
router.delete('/delBook', bookController.delBook);

// Route to add a new book, handled by the addBook function in the bookController
router.post('/addBook', bookController.addBook);

// Export the router so it can be used in other files
module.exports = router;
