const path = require("path");
const express = require("express");
const app = express();
const port = 4444;

const staticPath = path.join(__dirname, "../public");
// set templet engine
app.set("view engine", "hbs");

// building midlewire
app.use(express.static(staticPath));
console.log(staticPath);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`app is runong on ${port}`);
});
