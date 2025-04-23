# Books API (Node.js + Express)

## Setup Instructions

1. Clone the repo or extract the ZIP file.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start 
   ```
4. Use tools like Postman to test the following endpoints:
5. Testing:
   ```bash
   npm test 
   ```
### Endpoints

- `GET /api/books` - List all books
- `GET /api/books/:id` - Get book details by ID
- `POST /api/books` - Add a new book
- `PUT /api/books/:id` - Update an existing book
- `DELETE /api/books/:id` - Delete a book
### Swagger Documentation
- `/api/docs` - View API documentation
### Book Object

```json
{
  "id": "uuid",
  "name": "Book Title",
  "author": "Author Name",
  "publishedYear": 2020
}
```

### Assumptions

- UUID is generated on backend.
- Data is stored in memory and will reset on server restart.


