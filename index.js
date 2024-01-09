const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();


const { PORT } = require('./config');

// Start Server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});