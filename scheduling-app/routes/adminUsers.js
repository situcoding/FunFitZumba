const express = require('express');
const router = express.Router();
const AdminUser = require('../models/admin-user-model');

router.post('/register', async (req, res) => {
    try {
        const newUser = new AdminUser({
            username: req.body.username,
            password: req.body.password // You should hash passwords before saving. Consider bcrypt.
        });
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (err) {
        res.status(400).json(err);
    }
});
router.post('/login', async (req, res) => {
    try {
        const user = await AdminUser.findOne({ username: req.body.username });
        if (!user || user.password !== req.body.password) {  // Hashed passwords would require a check with bcrypt.
            return res.status(400).json("Invalid credentials.");
        }
        res.json("Logged in successfully");  // Usually, you'd send back a token or set a session.
    } catch (err) {
        res.status(500).json(err);
    }
});
router.put('/:userId', async (req, res) => {
    try {
        const updatedUser = await AdminUser.findByIdAndUpdate(req.params.userId, {
            password: req.body.password // Again, hash this in a real-world scenario.
        }, { new: true });
        res.json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.delete('/:userId', async (req, res) => {
    try {
        const removedUser = await AdminUser.findByIdAndRemove(req.params.userId);
        res.json(removedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
