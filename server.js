const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("<h1>JoinEcoGrow Frontend Live! Check backend: <a href='https://joinecogrow-backend-pfybw.ondigitalocean.app'>Backend</a></h1>"));
app.listen(port, () => console.log(`Frontend on port ${port}`));
