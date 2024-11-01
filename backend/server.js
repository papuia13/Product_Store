// const express = require('express'); // Import express in old fession way
import express from 'express'; // Import express in new fession way
import dotenv from 'dotenv'; // Import dotenv to use .env file
import { connectDB } from './config/db.js'; // Import connectDB function from db.js file
import productRoutes from './routes/product.route.js'; // Import productRoutes from product.route.js file

dotenv.config(); // To use .env file

const app = express();

app.use(express.json());//to accept json data in the body(middleware)

app.use('/api/products', productRoutes);

app.listen(5000, () => {
    connectDB();
    console.log('Server is listening on port http://localhost:5000 hello');
    });