const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>JoinEcoGrow</title>
        <style>
          body { font-family: Arial; background: #f0fdf4; text-align: center; padding: 20px; }
          h1 { color: #10b981; }
          .feature { background: #e6ffed; margin: 10px; padding: 10px; border-radius: 10px; }
          img { max-width: 200px; }
        </style>
      </head>
      <body>
        <img src="https://your-logo-url.png" alt="JoinEcoGrow Logo">
        <h1>?? JoinEcoGrow Platform</h1>
        <p>Welcome to your global eco-growing platform!</p>
        <h2>Key Features (750+ Total)</h2>
        <div class="feature"><strong>DIY Eco-Growing:</strong> 88 features (hydroponics, composters)</div>
        <div class="feature"><strong>Tree Planting:</strong> 91 features (QR tracking, NFTs)</div>
        <div class="feature"><strong>Entertainment:</strong> 63 features (videos, streaming)</div>
        <div class="feature"><strong>Gaming:</strong> 55 features (battle royale, challenges)</div>
        <div class="feature"><strong>AI Services:</strong> 68 features (digital twins, predictions)</div>
        <div class="feature"><strong>Community:</strong> 87 features (forums, mentorship)</div>
        <p>Backend Status: <a href="https://joinecogrow-backend-pfybw.ondigitalocean.app">Live</a></p>
      </body>
    </html>
  `);
});

app.listen(port, () => console.log(`Frontend running on port ${port}`));
