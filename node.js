// Import required modules
const express = require('express');
const path = require('path');

// Create an instance of Express
const app = express();

// Define middleware to serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    // Serve the index.html file for the homepage
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a port for the server to listen on
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
s