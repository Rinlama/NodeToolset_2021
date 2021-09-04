require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
// db
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on("error", (error) => {
  console.log(error);
});
db.once("open", () => {
  console.log("connected to database");
});

// custom
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
const customerRouter = require(path.join(__dirname, "./routes/customers.js"));
app.use("/customers", customerRouter);

// main file
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
