const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then(() => console.log('MongoDB is connected!'))
.catch(err => console.log(err));

const userRoutes = require('./routes/account');
app.use('/api/users', userRoutes);

const tokenRoutes = require('./routes/token');
app.use('/api/tokens', tokenRoutes);

const productRoutes = require('./routes/product');
app.use('/api/products', productRoutes);

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));