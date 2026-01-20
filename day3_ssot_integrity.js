// day3_ssot_integrity.js
const hasDuplicate = require("./lib/hasDuplicate");
const cards = require("./data/cards");

const titles = cards.map(c => c.title);

console.log("titles =", titles);
console.log("has duplicate titles?", hasDuplicate(titles));
