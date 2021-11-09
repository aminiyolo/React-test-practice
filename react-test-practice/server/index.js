const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(express.json());

const port = 5000;
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const travelDataRaw = fs.readFileSync("./travel.json", "utf-8");
const travelData = JSON.parse(travelDataRaw);

app.get("/products", (req, res) => {
  res.json(travelData.countries);
});

app.get("/options", (req, res) => {
  res.json(travelData.options);
});

let historyOrder = [];

app.post("/order", (req, res) => {
  const orderNumber = Math.floor(Math.random() * 1000000);
  const order = { price: req.body.totals.total, orderNumber };
  historyOrder.push(order);
  res.status(201).json(historyOrder);
});

app.listen(port, () => {
  console.log(`${port} is listening`);
});
