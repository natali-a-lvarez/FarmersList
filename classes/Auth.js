const Customer = require("./Customer");

class Auth {
  constructor(customers) {
    this.customers = [];
  }

  register(name, email, shippingAddress) {
    let newCustomer = new Customer(name, email, shippingAddress);
    this.customers.push(newCustomer);
  }

  login(email) {
    return this.customers.find((el) => el.email === email);
  }
}

module.exports = Auth;
