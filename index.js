const express = require("express");

const app = express();

app.get("/about", (req, res) => {
  res.send("<h2>Docker Practice About Page</h2>");
});

app.get("", (req, res) => {
  res.send("<h2>Docker Ehsan Marketing Home Page</h2>");
});
 
const PORT = "80";
app.listen(PORT, () => {
  console.log(`project is running at PORT ${PORT}...`);
});
