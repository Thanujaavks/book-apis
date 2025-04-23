const {v4: uuidv4} = require('uuid');
const sanitizeInput = require('../utils/sanitize');
const books = require('../models/bookModel');
// let books = [];

exports.getAllBooks = (req, res) => {
    res.json(books);
};

exports.getBookById = (req, res) => {
    const book = books.find(b => b.id === req.params.id);
    if (!book) {
        return res.status(404).json({error: 'Book not found'});
    }
    res.json(book);
};

exports.addBook = (req, res) => {
    const {name, author, publishedYear} = req.body;

    const newBook = {
        id: uuidv4(),
        name: sanitizeInput(name),
        author: sanitizeInput(author),
        publishedYear: sanitizeInput(publishedYear.toString())
    };

    books.push(newBook);
    res.status(201).json(newBook);
};

exports.updateBook = (req, res) => {
    const {name, author, publishedYear} = req.body;
    const book = books.find(b => b.id === req.params.id);

    if (!book) return res.status(404).json({error: 'Book not found'});

    if (name) book.name = sanitizeInput(name);
    if (author) book.author = sanitizeInput(author);
    if (publishedYear) book.publishedYear = sanitizeInput(publishedYear.toString());

    res.json(book);
};

exports.deleteBook = (req, res) => {
    const index = books.findIndex(b => b.id === req.params.id);
    if (index === -1) return res.status(404).json({error: 'Book not found'});

    const deleted = books.splice(index, 1);
    res.json({message: 'Book deleted successfully', book: deleted[0]});
};
