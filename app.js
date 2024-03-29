// Import the 'express' module
const express = require('express');

// Import the 'body-parser' module
const bodyParser = require('body-parser');

// Import the 'security' module from the local file './security'
const security = require('./security'); 

// Create an instance of the Express application
const app = express();

// Middleware to parse incoming request bodies as JSON
app.use(bodyParser.json());

// Mount the security module at the root URL ('/')
app.use('/', security);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});