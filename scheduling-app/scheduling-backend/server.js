const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

// Routers
const meetingsRouter = require('./routes/meetings');
const adminUserRoutes = require('./routes/adminUsers');

// Database setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: '122418Jackie',
    database: 'SchedulingDB'
});

db.connect((error) => {
    if (error) throw error;
    console.log('Connected to the SchedulingDB.');
});

// Middleware
app.use(cors());  // Allow cross-origin requests
app.use(bodyParser.json());

// Use Routers
app.use('/api/meetings', meetingsRouter); // I've prefixed it with '/api' for clearer API paths
app.use('/admin-users', adminUserRoutes);

// Root response
app.get('/', (req, res) => {
    res.send('Scheduling Backend is up and running!');
});

const PORT = 3000;

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
