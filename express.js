// Import the 'express' module
var express = require('express');

// Create an Express application
var app = express();

// Define a route handler for the root URL ('/')
app.get('/', function(req, res){
  // Send a response with the message "Welcome to our website!"
  res.send("Welcome to our website!");
});

// Start the server and listen on port 3000
app.listen(3000, () => {
  // Log a message to the console when the server starts
  console.log('The server is running at port 3000');
});