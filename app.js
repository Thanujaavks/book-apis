const express = require('express');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const errorHandler = require('./middleware/errorHandler');
const {swaggerUi, swaggerSpec} = require('./swagger/swagger');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api/books', bookRoutes);
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
