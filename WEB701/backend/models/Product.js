const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true},
    companyName: { type: String, required: true},
    quantity: { type: Number, required: true},
    tokenCost: { type: Number, required: true},
    waitTime: { type: Number, default: 0}, // this is done in minutes
    donorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true},
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);