/**
 * Check the order is not fraudulent
 *
 * @param {Order} currentOrder
 * @param {Order} nextOrder
 */
const isFradulent = (currentOrder, nextOrder) =>
  Object.keys(currentOrder).every((element) => {
    return element === "orderId"
      ? true
      : element === "creditCard"
      ? currentOrder[element] !== nextOrder[element]
      : currentOrder[element] === nextOrder[element];
  });

/**
 * Check how many orders are fraudulent in the list
 *
 * @param {Array<Order>} orders
 */
const checkOrders = (orders) => {
  fraudResults = [];

  for (let i = 0; i < orders.length - 1; ++i) {
    for (let j = i + 1; j < orders.length; j++) {
      if (isFradulent(orders[i], orders[j]))
        fraudResults.push({
          isFraudulent: true,
          orderId: orders[j].orderId,
        });
    }
  }

  return fraudResults;
};

module.exports = checkOrders;
