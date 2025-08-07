const mongoose = require('mongoose');

const reservationSceham = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    beneficiaryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account', required: true},
    tokensSpent: { type: Number, required: true}
}, { timestamps: true});

module.exports = mongoose.model('Reservation', reservationSchema);