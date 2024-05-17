const express = require('express');
const app = express();

app.get('/api/posts', (req, res) => {
    // Fetch data from a database or API, perform any necessary processing
    const posts = [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' },
    ];
    res.json(posts); // Send JSON response to Vue.js app
  });

const port = process.env.PORT || 3000; // Use environment variable for port

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});