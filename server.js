const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>JoinEcoGrow Platform</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body {
          font-family: system-ui;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .container {
          background: white;
          border-radius: 20px;
          padding: 40px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          text-align: center;
          max-width: 600px;
        }
        h1 {
          color: #10b981;
          font-size: 48px;
          margin-bottom: 20px;
        }
        .features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          margin-top: 30px;
        }
        .feature {
          background: #f3f4f6;
          padding: 15px;
          border-radius: 10px;
        }
        .number {
          font-size: 28px;
          font-weight: bold;
          color: #10b981;
        }
        .label {
          font-size: 14px;
          color: #6b7280;
        }
        .status {
          background: #10b981;
          color: white;
          padding: 10px 20px;
          border-radius: 20px;
          display: inline-block;
          margin-top: 20px;
        }
        .api-link {
          color: #3b82f6;
          text-decoration: none;
          margin-top: 20px;
          display: inline-block;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>?? JoinEcoGrow</h1>
        <p>Your Global Eco-Growing Platform</p>
        
        <div class="features">
          <div class="feature">
            <div class="number">750+</div>
            <div class="label">Total Features</div>
          </div>
          <div class="feature">
            <div class="number">88</div>
            <div class="label">DIY Features</div>
          </div>
          <div class="feature">
            <div class="number">91</div>
            <div class="label">Tree Features</div>
          </div>
          <div class="feature">
            <div class="number">195+</div>
            <div class="label">Countries</div>
          </div>
        </div>
        
        <div class="status">? Platform Active</div>
        
        <br>
        <a href="https://joinecogrow-backend-pfybw.ondigitalocean.app" class="api-link">
          Backend API Status ?
        </a>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(\`JoinEcoGrow Frontend running on port \${PORT}\`);
});
