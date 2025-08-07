const express = require('express');
const router = express.Router();
const Account = require('../models/Account');

router.post('/register', async (req, res) => {
    const { firstName, email, password, memberType} = req.body;
    const newAccount = new Account({ firstName, email, password, memberType});
    const savedAccount = await newAccount.save();
    res.json(savedAccount);
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const account = await Account.findOne({ email, password});
    if (!account) return res.status(400).json({ message: 'Incorrect details'});
    res.json({ message: 'Login successful', account});
});

module.exports = router;