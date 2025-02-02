const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost:27017/marketplace', { useNewUrlParser: true, useUnifiedTopology: true });

const Product = mongoose.model('Product', new mongoose.Schema({ name: String, price: Number }));

const app = express();
app.use(cors());
app.use(express.json());

app.post('/product', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.json({ message: 'Товар додано!' });
});

app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

app.listen(5000, () => console.log('Сервер маркетплейсу запущено на порту 5000'));
