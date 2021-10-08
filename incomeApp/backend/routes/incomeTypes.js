const express = require("express");
const router = express.Router();
const { IncomeTypes } = require("../models");
const { incomTypeValidation } = require("../validator");

router.get("/", async (req, res) => {
  try {
    const incomeTypes = await IncomeTypes.findAll();
    res.json(incomeTypes);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
});

router.post("/", async (req, res) => {
  const { name, symbol } = req.body;
  try {
    const { error } = incomTypeValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });
    const incomeType = await IncomeTypes.create({ name, symbol });
    return res.json(incomeType);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Something went wrong!");
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const incomeType = await IncomeTypes.findOne({
      where: { id },
    });
    if ( incomeType == null ) return res.status(404).send({ message: "Income Type not found" });
    return res.json(incomeType);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, symbol } = req.body;
  try {
    const incomeType = await IncomeTypes.findOne({
      where: { id },
    });
    if (incomeType == null)  res.status(404).send({message: "Income type not found!"});

    const { error } = incomTypeValidation(req.body);
    if (error) return res.status(400).send({ message: error.details[0].message });

    incomeType.name = name;
    incomeType.symbol = symbol;
    incomeType.save();
    return res.json(incomeType);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const incomeType = await IncomeTypes.findOne({
      where: { id },
    });
    if ( incomeType == null ) return res.status(404).send({ message: "Income Type not found" });
    
    await incomeType.destroy();
    return res.json({ message: "IncomeType Deleted!" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
});

module.exports = router;
