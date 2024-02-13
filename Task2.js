const express = require('express');
const app = express();

// First middleware function
app.use((req, res, next) => {
  console.log('This is the first middleware');
  next(); // Call next to pass control to the next middleware function
});

// Second middleware function
app.use((req, res, next) => {
  console.log('This is the second middleware');
  next(); // Call next to pass control to the next middleware function
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
