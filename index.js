const express = require('express');
const app = express();
require('dotenv').config()


const PORT = process.env.PORT || 4000;




// Start Server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});