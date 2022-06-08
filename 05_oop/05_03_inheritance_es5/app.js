console.log("=== Inheritance ES5 ===");

const str = new String("Hello World!");
// console.log(str);

function Product(brand, price, discount) {
  // 1. Створюється новий об'єкт.
  // 2. на цей об'єкт втсановлюється посилання this
  // 3. повертається цей об'єкт
  this.brand = brand;
  this.price = price;
  this.discount = discount;
}

Product.prototype.getPriceWithDiscount = function () {
  return (this.price * (100 - this.discount)) / 100;
};

Product.prototype.setPrice = function (newPrice) {
  this.price = newPrice;
};

const apple = new Product("Apple", 100, 15);
const samsung = new Product("Samsung", 200, 25);

// console.log(apple);
// console.log(samsung);

// Object create
const protoForObj = {
  sayHello() {
    return "Hello World!";
  },
};

const obj = Object.create(protoForObj, {
  firstName: {
    value: "Sergey",
  },
});

function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

User.prototype.sayHello = function () {
  return `Hello, ${this.firstName} ${this.lastName}`;
};

const user = new User("Sergey", "Bunakov");

// Customer
function Customer(firstName, lastName, membership) {
  // User.call(this, firstName, lastName);
  User.apply(this, arguments);

  this.membership = membership;
}

Customer.prototype = Object.create(User.prototype);
Customer.prototype.constructor = Customer;

Customer.prototype.getMembership = function () {
  return this.membership.toUpperCase();
};

const customer = new Customer("Elena", "Ryzhikova", "basic");
