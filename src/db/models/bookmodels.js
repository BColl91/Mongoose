const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    author: {
        type: String,
        required: false
    },
    genre: {
        type: String,
        required: false
    },
    publishedYear: {
        type: Number,
        required: false
    }
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
