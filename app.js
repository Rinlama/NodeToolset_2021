const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  //res.sendFile("index.html", { root: path.join(__dirname, "./public") });
  const data = {
    customer: ["Javok33", "Javok3", "Javok"],
  };
  res.render("index", data);
});

app.listen(3001, () => {
  console.log("server is running");
});
