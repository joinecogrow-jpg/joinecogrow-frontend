const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>JoinEcoGrow Platform</title>
      <style>
        body { font-family: Arial; padding: 50px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; }
        .container { max-width: 800px; margin: 0 auto; text-align: center; }
        h1 { font-size: 48px; }
        .features { background: white; color: black; padding: 30px; border-radius: 20px; margin-top: 30px; }
        .stat { display: inline-block; margin: 20px; }
        .number { font-size: 36px; font-weight: bold; color: #10b981; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>?? JoinEcoGrow Platform</h1>
        <p>Your Global Eco-Growing Platform</p>
        <div class="features">
          <h2>Platform Features</h2>
          <div class="stat">
            <div class="number">750+</div>
            <div>Total Features</div>
          </div>
          <div class="stat">
            <div class="number">88</div>
            <div>DIY Features</div>
          </div>
          <div class="stat">
            <div class="number">91</div>
            <div>Tree Features</div>
          </div>
          <div class="stat">
            <div class="number">195+</div>
            <div>Countries</div>
          </div>
        </div>
        <p style="margin-top: 30px;">
          <a href="https://joinecogrow-backend-pfybw.ondigitalocean.app" style="color: white;">Backend API Status</a>
        </p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
