const path = require("path");
const fs = require("fs");

const utilsOrder = require("./utils/order");

class ReadOrders {
  constructor(orders) {
    this.orders = utilsOrder.normalizeOrders(orders.split("\n"));
  }

  getOrders() {
    return this.orders;
  }
}

module.exports = ReadOrders;
