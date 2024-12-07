const express = require('express');
const app = express();

// Serve static files for a React app
app.use(express.static('build'));

// Your other routes and logic here

// Make sure the app listens on port 80 (HTTP)
const port = 80;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);  // Fixed template literal syntax
}); 