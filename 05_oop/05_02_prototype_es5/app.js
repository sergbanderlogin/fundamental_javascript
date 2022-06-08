console.log("=== Prototype ES5 ===");

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

Product.prototype.setPrice = function(newPrice) {
  this.price = newPrice;
}

const apple = new Product("Apple", 100, 15);
const samsung = new Product("Samsung", 200, 25);

// console.log(apple);
// console.log(samsung);
