const Order = require("../Order");

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

const normalizEmail = (email) => {
  let aux = email.split("@");
  let atIndex = aux[0].indexOf("+");
  aux[0] =
    atIndex < 0
      ? aux[0].replace(".", "")
      : aux[0].replace(".", "").substring(0, atIndex - 1);
  email = aux.join("@");

  return email;
};

/**
 *
 * @param {String} street
 */
const normalizeStreet = (street) =>
  street.replace(/st.|rd./, (str) => (str === "st." ? "street" : "road"));

/**
 *
 * @param {*} state
 */
const normalizeState = (state) =>
  state.replace(/il|ca|ny/, (str) =>
    str === "il" ? "illinois" : str === "ca" ? "california" : "new york"
  );

/**
 *
 * @param {Array} order
 */
const buildOrder = (order) => {
  const segregation = {};

  order.forEach((element, index) => {
    segregation[`${keyMap[index]}`] =
      index < 2 ? Number(element) : index < 6 ? element.toLowerCase() : element;
  });

  segregation.email = normalizEmail(segregation.email);
  segregation.street = normalizeStreet(segregation.street);
  segregation.state = normalizeState(segregation.state);

  return new Order(segregation);
};

module.exports = buildOrder;
