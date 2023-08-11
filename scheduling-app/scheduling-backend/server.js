const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors()); // Allow cross-origin requests
app.use(bodyParser.json());

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Scheduling Backend is up and running!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const mysql = require('mysql2');

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
const adminUserRoutes = require('./routes/adminUsers');

app.use('/admin-users', adminUserRoutes);
