/*
// CHECK FRAUD
for (let i = 0; i < orders.length; i++) {
  let current = orders[i];
  let isFraudulent = false;

  for (let j = i + 1; j < orders.length; j++) {
    isFraudulent = false;
    
    if (
      current.dealId === orders[j].dealId &&
      current.email === orders[j].email &&
      current.state === orders[j].state &&
      current.zipCode === orders[j].zipCode &&
      current.street === orders[j].street &&
      current.city === orders[j].city &&
      current.creditCard !== orders[j].creditCard
    ) {
      isFraudulent = true;
    }

    if (isFraudulent) {
      fraudResults.push({
        isFraudulent: true,
        orderId: orders[j].orderId,
      });
    }
  }
}
*/

const areEqual = (a, b) => a === b;
const noteEqual = (a, b) => a !== b;

const isFradulent = (currentOrder, nextOrder) => {
  return Object.keys(currentOrder).some((element) => {
    return element === "creditCard"
      ? noteEqual(currentOrder[element], nextOrder[element])
      : areEqual(currentOrder[element], nextOrder[element]);
  });
};

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
