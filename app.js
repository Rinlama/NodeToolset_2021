const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: path.join(__dirname, "./public") });
});

app.listen(3001, () => {
  console.log("server is running");
});
