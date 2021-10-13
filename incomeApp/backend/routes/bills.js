const express = require("express");
const router = express.Router();
const { Bills } = require("../models");

router.get("/", async (req, res) => {
  try {
    const bills = await Bills.findAll();
    return res.json(bills);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong!");
  }
});

router.post("/", async (req, res) => {
  const { payerName, billNo, billingDate, registryPageNo, otherIncomes } =
    req.body;
  try {
    const bill = await Bills.create({
      payerName,
      billNo,
      billingDate,
      registryPageNo,
      otherIncomes,
    });
    return res.json(bill);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong!");
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const bill = await Bills.findOne({
      where: { id },
    });
    if (bill == null)
      return res.status(404).send({ message: "Bill not found" });
    return res.json(bill);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, symbol } = req.body;
  try {
    const bill = await Bills.findOne({
      where: { id },
    });
    if (bill == null)
      return res.status(404).send({ message: "Bill not found" });
    bill.name = name;
    bill.symbol = symbol;
    bill.save();
    res.json(bill);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const bill = await Bills.findOne({
      where: { id },
    });
    if (bill == null)
      return res.status(404).send({ message: "Income Type not found" });
    await bill.destroy();
    res.json({ message: "IncomeType Deleted!" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
});

module.exports = router;
