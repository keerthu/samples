const express = require("express");
const cors = require("cors");
const { sequelize, Customers, IncomeTypes, Bills } = require("./models");
const indexRouter = require("./routes/index");
const incomeTypesRouter = require("./routes/incomeTypes");
const customersRouter = require("./routes/customers");
const billsRouter = require("./routes/bills");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/incomeTypes", incomeTypesRouter);
app.use("/customers", customersRouter);
app.use("/bills", billsRouter);
app.listen(5000, async () => {
  console.log("Server runs on port 5000...");
  await sequelize.authenticate();
  console.log("Database connected!");
});
