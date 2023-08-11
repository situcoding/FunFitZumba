const express = require('express');
const router = express.Router();
const AdminUser = require('../models/admin-user-model');

router.post('/register', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        const newUser = new AdminUser({
            username: req.body.username,
            password: hashedPassword
        });
        
        const savedUser = await newUser.save();
        res.status(201).json({ message: 'User registered successfully', userId: savedUser._id });
    } catch (err) {
        console.error(err);  // Log the error
        res.status(500).json({ message: 'Server error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await AdminUser.findOne({ username: req.body.username });
        
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        
        const validPass = await bcrypt.compare(req.body.password, user.password);
        
        if (!validPass) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ _id: user._id }, 'YOUR_SECRET_KEY');  // Replace 'YOUR_SECRET_KEY' with an actual secret
        res.header('auth-token', token).json({ message: 'Logged in successfully', token: token });
        
    } catch (err) {
        console.error(err);  // Log the error
        res.status(500).json({ message: 'Server error' });
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
