const path = require("path");
const fs = require("fs");

const FraudRadar = require("./FraudRadar");
const ReadOrders = require("./ReadOrders");

const readOrders = new ReadOrders(
  fs.readFileSync(path.join(__dirname, "..", "data", "OneLineFile.txt"), "utf8")
);

console.log(readOrders.getOrders());
