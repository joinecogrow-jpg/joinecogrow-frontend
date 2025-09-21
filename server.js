const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => res.send("JoinEcoGrow Frontend Live! Backend URL: https://joinecogrow-backend-pfybw.ondigitalocean.app"));
app.listen(port, () => console.log(`Frontend on port ${port}`));
