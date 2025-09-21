const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 8080;

// Serve static files
app.use(express.static('public'));

// Main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API route
app.get('/api/status', (req, res) => {
  res.json({ status: 'Frontend running', backend: 'https://joinecogrow-backend-pfybw.ondigitalocean.app' });
});

app.listen(PORT, () => {
  console.log(`Frontend server running on port ${PORT}`);
});
