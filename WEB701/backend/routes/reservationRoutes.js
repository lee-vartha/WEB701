const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');
const Account = require('../models/Account');
const Product = require('../models/Product');

router.post('/', async (req, res) => {
    const { productId, beneficiaryId } = req.body;

    const product = await Product.findById(productId);
    const beneficiary = await Account.findById(beneficiaryId);

    if (!product || !beneficiary) return res.status(404).json({ message: 'Product or Beneficiary not found' });
    if (beneficiary.tokens < product.tokenCost) return res.status(400).json({ message: 'Not enough tokens to afford this product'});
    if (product.quantity <= 0) return res.status(400).json({ message: 'Product out of stock'});

    // update product quantity
    beneficiary.tokens -= product.tokenCost;
    product.quantity -= 1;
    await beneficiary.save();
    await product.save();

    // save reservation
    const newResevration = new Reservation({ productId, beneficiaryId, tokensSpent: product.tokenCost});
    const savedReservation = await newReservation.save();

    res.json({ message: 'Meal has been reserved successfully', reservation: savedReservation});
});

module.exports = router;
