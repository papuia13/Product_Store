// const express = require('express'); // ImPORT express in old fession way
import express from 'express'; // Import express in new fession way
import dotenv from 'dotenv'; // Import dotenv to use .env file
import { connectDB } from './config/db.js'; // Import connectDB function from db.js file
import productRoutes from './routes/product.route.js'; // Import productRoutes from product.route.js file

dotenv.config(); // To use .env file

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());//to accept json data in the body(middleware)

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    connectDB();
    console.log('Server is listening on PORT http://localhost:'+PORT);
    });