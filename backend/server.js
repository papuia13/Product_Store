// const express = require('express'); // Import express in old fession way
import express from 'express'; // Import express in new fession way
import dotenv from 'dotenv'; // Import dotenv to use .env file
import { connectDB } from './config/db.js'; // Import connectDB function from db.js file
import Product from './models/product.model.js'; // Import Product model from Product.js file
import mongoose, { mongo } from 'mongoose';

dotenv.config(); // To use .env file

const app = express();

app.use(express.json());//to accept json data in the body(middleware)

app.get('/api/products', async(req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({ success: true, data: products });
    }catch(error) {
    console.log("Error in fetching products: ", error.message);
    res.status(500).json({ success: false, message: "Server error" });
    }
});

app.post('/api/products', async(req, res) => {
    const product = req.body;//user will send this data 
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ sucess:false , message: 'Please fill all fields' });
    }
    const newProduct = new Product(product)
    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    }catch (error) {
        console.error("Error in create product: ", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

app.delete('/api/products/:id', async(req, res) => {
    const {id} = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product is deleted" });
    }catch(error) {
        console.error("Error in delete product: ", error.message);
        res.status(404).json({ success: false, message: "Product not found" });
    }
});

app.put('/api/products/:id', async(req, res) => {
    const {id} = req.params;
    const product = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid product id" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    }catch(error) {
        console.error("Error in update product: ", error.message);
        res.status(500).json({ success: false, message: "Server error" });
    }
});

app.listen(5000, () => {
    connectDB();
    console.log('Server is listening on port http://localhost:5000 hello');
    });