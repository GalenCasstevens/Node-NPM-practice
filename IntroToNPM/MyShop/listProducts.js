var faker = require("faker");

console.log("===================");
console.log("Welcome to my shop!");
console.log("===================");
console.log();

for(var i = 0; i < 10; i++) {
    console.log("Product: " + faker.commerce.productName());
    console.log("Price: $" + faker.commerce.price());
    console.log();
}