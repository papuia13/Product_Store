// const express = require('express'); // Import express in old fession way
import express from 'express'; // Import express in new fession way
import dotenv from 'dotenv'; // Import dotenv to use .env file
import { connectDB } from './config/db.js'; // Import connectDB function from db.js file

dotenv.config(); // To use .env file

const app = express();

app.get('/', (req, res) => {
    res.send('Hello____World!');
});

console.log(process.env.MONGO_URI)

app.listen(5000, () => {
    connectDB();
    console.log('Server is listening on port http://localhost:5000 hello');
    });