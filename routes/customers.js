const express = require("express");
const router = express.Router();
const customer = require("../models/customer");

// index

router.get("/", async (req, res) => {
  await customer.create({ firstName: "Sam", lastName: "Lama" });
  const data = await customer.find();

  // console.log("test " + data);
  // const data = {
  //   data: ["test", "sdf"],
  // };
  res.render("./customer/index", { data });
});

router.get("/:id", (req, res) => {
  const params = req.params.id;
  res.render(params);
});

router.post("/", async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  await customer.create({ firstName: firstName, lastName: lastName });
  const data = await customer.find();
  res.render("./customer/index", { data });
});

router.post("/delete/:id", async (req, res) => {
  const params = req.params.id;
  if (params === "all") await customer.deleteMany({});
  const data = await customer.find();
  res.render("./customer/index", { data });
});

router.post("/", (req, res) => {});

module.exports = router;
