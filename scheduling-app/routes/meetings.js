const express = require('express');
const router = express.Router();
const db = require('../config/database'); // Assuming you have a database config file

// Get all meetings
router.get('/', (req, res) => {
    const query = "SELECT * FROM meetings";
    db.query(query, (err, results) => {
        if(err) throw err;
        res.json(results);
    });
});

// Get a single meeting by ID
router.get('/:id', (req, res) => {
    const query = "SELECT * FROM meetings WHERE id = ?";
    db.query(query, [req.params.id], (err, result) => {
        if(err) throw err;
        res.json(result[0]);
    });
});

// Add a meeting
router.post('/', (req, res) => {
    const newMeeting = req.body;
    const query = "INSERT INTO meetings SET ?";
    db.query(query, newMeeting, (err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

// Update a meeting
router.put('/:id', (req, res) => {
    const updatedMeeting = req.body;
    const query = "UPDATE meetings SET ? WHERE id = ?";
    db.query(query, [updatedMeeting, req.params.id], (err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

// Delete a meeting
router.delete('/:id', (req, res) => {
    const query = "DELETE FROM meetings WHERE id = ?";
    db.query(query, [req.params.id], (err, result) => {
        if(err) throw err;
        res.json(result);
    });
});

module.exports = router;
