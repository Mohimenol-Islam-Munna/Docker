const express = require("express");

const app = express();

app.get("/about", (req, res) => {
  res.send("<h2>Docker Practice About Page</h2>");
});

app.get("", (req, res) => {
  res.send("<h2>Docker Practice Home Page</h2>");
});

console.log("project is running....");

const PORT = "8000";
app.listen(PORT, () => {
  console.log(`project is running at PORT ${PORT}...`);
});
