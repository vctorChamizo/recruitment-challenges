class Order {
  constructor(order) {
    this.orderId = order.orderId;
    this.dealId = order.dealId;
    this.email = order.email;
    this.street = order.street;
    this.city = order.city;
    this.state = order.state;
    this.zipCode = order.zipCode;
    this.creditCard = order.creditCard;
  }
}

module.exports = Order;
