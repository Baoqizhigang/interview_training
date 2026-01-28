// day5_ssot_fast.js
const { getCardsByTagFast, cardsByTag } = require("./lib/cardsIndex");

console.log("all tags:", Object.keys(cardsByTag));
console.log(getCardsByTagFast("event"));
console.log(getCardsByTagFast("page"));
console.log(getCardsByTagFast("not-exist")); // []
