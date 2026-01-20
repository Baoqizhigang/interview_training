// day3_ssot_integrity.js
const hasDuplicate = require("./lib/hasDuplicate"); 
const cards = require("./data/cards"); //会去找 ./data/cards.js，执行它，然后拿到 module.exports 的值。

const titles = cards.map(c => c.title);

console.log("titles =", titles);
console.log("has duplicate titles?", hasDuplicate(titles));
