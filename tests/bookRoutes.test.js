const request = require('supertest');
const express = require('express');
const bookRoutes = require('../routes/bookRoutes');
const books = require('../models/bookModel'); // Add this to manipulate in-memory data


const app = express();
app.use(express.json());
app.use('/books', bookRoutes);

let testBookId;

beforeEach(() => {

    books.length = 0;


    const book = {id: '1', name: 'Initial Book', author: 'Test Author', publishedYear: 2000};
    books.push(book);
    testBookId = book.id;
});

describe('Book Routes API', () => {
    it('GET /books - should return all books', async () => {
        const response = await request(app).get('/books');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('GET /books/:id - should return a book by ID', async () => {
        const response = await request(app).get(`/books/${testBookId}`);
        expect(response.status).toBe(200);
        expect(response.body.id).toBe(testBookId);
    });

    it('POST /books - should add a new book', async () => {
        const newBook = {name: 'Test Book', author: 'Author Name', publishedYear: 2001};
        const response = await request(app).post('/books').send(newBook);
        expect(response.status).toBe(201);
        expect(response.body.name).toBe('Test Book');
    });

    it('PUT /books/:id - should update a book by ID', async () => {
        const updatedBook = {name: 'Updated Book', author: 'Updated Author', publishedYear: 2022};
        const response = await request(app).put(`/books/${testBookId}`).send(updatedBook);
        expect(response.status).toBe(200);
        expect(response.body.name).toBe('Updated Book');
    });

    it('DELETE /books/:id - should delete a book by ID', async () => {
        const response = await request(app).delete(`/books/${testBookId}`);
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Book deleted successfully');
    });
});
