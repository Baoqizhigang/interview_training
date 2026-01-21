const getCardsByTag = require("./lib/getCardsByTag");

console.log(getCardsByTag("event"));
console.log(getCardsByTag("page"));
console.log(getCardsByTag("grid"));
console.log(getCardsByTag("not-exist")); // []