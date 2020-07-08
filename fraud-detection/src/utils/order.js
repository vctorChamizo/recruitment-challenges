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
 *
 * @param {String} street
 */
const normalizeStreet = (street) =>
  street.replace(/st.|rd./, (str) => (str === "st." ? "street" : "road"));

const normalizeState = (state) =>
  state.replace(/il|ca|ny/, (str) =>
    str === "il"
      ? "illinois"
      : str === "ca"
      ? "california"
      : str === "cl"
      ? "colorado"
      : "new york"
  );

/**
 *
 * @param {Array} order
 */
const orderSegregation = (order) => {
  const segregation = {};

  order.forEach((element, index) => {
    segregation[`${keyMap[index]}`] =
      index < 2 ? Number(element) : index < 6 ? element.toLowerCase() : element;
  });

  segregation.email = normalizEmail(segregation.email);
  segregation.street = normalizeStreet(segregation.street);
  segregation.state = normalizeState(segregation.state);

  return segregation;
};

/**
 *
 * @param {Array} orders
 */
const normalizeOrders = (orders) =>
  orders.map((element) => orderSegregation(element.split(",")));

module.exports = { normalizeOrders };
