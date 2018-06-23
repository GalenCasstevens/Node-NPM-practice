var faker = require("faker");

var name = faker.name.findName();
var email = faker.internet.email();
var card = faker.helpers.createCard();

console.log("Name: " + name);
console.log("Email: " + email);
console.log("Card: " + faker.address.streetAddress());