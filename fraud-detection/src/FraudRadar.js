const ReadFile = require("./ReadFile");
const buildOrder = require("./utils/buildOrder");
const checkOrders = require("./utils/checkOrders");

const FraudRadar = (filePath) => {
  const fileContent = new ReadFile(filePath).read();
  const listOrder = fileContent
    .split("\n")
    .map((element) => buildOrder(element.split(",")));

  return checkOrders(listOrder);
};

module.exports = FraudRadar;
