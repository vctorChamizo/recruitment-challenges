const keyMap = [
  "orderId",
  "dealId",
  "email",
  "street",
  "city",
  "state",
  "zipCode",
  "creditCard",
];

const orderSegregation = (order) => {
  const segregation = {};

  order.forEach((element, index) => {
    segregation[`${keyMap[index]}`] =
      index < 2 ? Number(element) : index < 6 ? element.toLowerCase() : element;
  });

  return segregation;
};

const normalizeOrders = (orders) =>
  orders.map((element) => orderSegregation(element.split(",")));

module.exports = { normalizeOrders };
