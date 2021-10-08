const express = require("express");
const router = express.Router();
const { Customers } = require("../models");

router.get("/", async (req, res) => {
  try {
    const customers = await Customers.findAll();
    return res.json(customers);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong!");
  }
});

router.post("/", async (req, res) => {
  const { name, nicNumber } = req.body;
  try {
    const customer = await Customers.create({ name, nicNumber });
    return res.json(customer);
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong!");
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customers.findOne({
      where: { id },
    });
    if (customer == null) return res.status(404).send({ message: "Customer not found" });
    
    return res.json(customer);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const { name, nicNumber } = req.body;
  try {
    const customer = await Customers.findOne({
      where: { id },
    });
    if ( customer == null ) return res.status(404).send({ message: "Customer not found" });
    
    customer.name = name;
    customer.nicNumber = nicNumber;
    customer.save();
    return res.json(customer);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const customer = await Customers.findOne({
      where: { id },
    });
    if ( customer == null ) return res.status(404).send({ message: "Customer not found" });
    await customer.destroy();
    res.json({ message: "Customer Deleted!" });
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong!");
  }
});

module.exports = router;
