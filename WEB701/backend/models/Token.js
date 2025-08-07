const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    tokenValue: { type: Number, required: true},
    accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true },
}, { timestamps: true});

module.exports = mongoose.model('Token', tokenSchema)