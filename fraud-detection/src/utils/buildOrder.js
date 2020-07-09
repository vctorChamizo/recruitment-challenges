const Order = require("../Order");
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

/**
 * Normalize email structure
 *
 * @param {String} email
 */
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
 * Normalize street structure
 *
 * @param {String} street
 */
const normalizeStreet = (street) =>
  street.replace(/st.|rd./, (str) => (str === "st." ? "street" : "road"));

/**
 * Normalize state structure
 *
 * @param {String} state
 */
const normalizeState = (state) =>
  state.replace(/il|ca|ny/, (str) =>
    str === "il" ? "illinois" : str === "ca" ? "california" : "new york"
  );

/**
 * Order object builder - Attribute formatting
 *
 * @param {Object} order
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
