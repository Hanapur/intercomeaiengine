const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>🔥 Intercom AI Engine Running!</h1>");
});

app.listen(5000, () => {
  console.log("Server running at http://localhost:5000");
});
