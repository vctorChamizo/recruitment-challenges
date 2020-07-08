const path = require("path");

const ReadFile = require("./ReadFile");
const buildOrder = require("./utils/buildOrder");

const FraudRadar = (filePath) => {
  const fileContent = new ReadFile(filePath).read();
  const listOrder = fileContent
    .split("\n")
    .map((element) => buildOrder(element.split(",")));

  console.log(listOrder);
};

FraudRadar(path.join(__dirname, "..", "data", "OneLineFile.txt"));

module.exports = { FraudRadar };
