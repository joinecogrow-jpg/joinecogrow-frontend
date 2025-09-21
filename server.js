const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>JoinEcoGrow - Global Eco-Growing Platform</title>
      <style>
        body { font-family: Arial, sans-serif; background: #f0fdf4; margin: 0; padding: 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 40px; text-align: center; }
        h1 { color: #10b981; font-size: 3rem; margin-bottom: 20px; }
        .logo { width: 200px; margin: 20px auto; }
        .features { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
        .feature { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .number { font-size: 2rem; font-weight: bold; color: #10b981; }
        .label { font-size: 1rem; color: #6b7280; }
        .status { margin-top: 40px; background: #10b981; color: white; padding: 20px; border-radius: 10px; }
        a { color: #3b82f6; text-decoration: none; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <img class="logo" src="https://your-logo-url.png" alt="JoinEcoGrow Logo">
        <h1>?? JoinEcoGrow Platform</h1>
        <p>Your complete DIY eco-growing system with global access!</p>
        
        <div class="features">
          <div class="feature">
            <div class="number">750+</div>
            <div class="label">Total Features</div>
          </div>
          <div class="feature">
            <div class="number">88</div>
            <div class="label">DIY Eco-Growing</div>
          </div>
          <div class="feature">
            <div class="number">91</div>
            <div class="label">Tree Planting</div>
          </div>
          <div class="feature">
            <div class="number">63</div>
            <div class="label">Entertainment</div>
          </div>
          <div class="feature">
            <div class="number">55</div>
            <div class="label">Gaming</div>
          </div>
          <div class="feature">
            <div class="number">68</div>
            <div class="label">AI Services</div>
          </div>
          <div class="feature">
            <div class="number">195+</div>
            <div class="label">Countries Supported</div>
          </div>
          <div class="feature">
            <div class="number">50+</div>
            <div class="label">Languages</div>
          </div>
        </div>
        
        <div class="status">
          <h2>Status</h2>
          <p>Backend: <a href="https://joinecogrow-backend-pfybw.ondigitalocean.app">LIVE</a></p>
          <p>Frontend: Deploying - Powered by Greenix NGO for sustainable growing!</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
