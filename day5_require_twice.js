console.log("start");

// 第一次 require
const a = require("./lib/cardsIndex");
console.log("after first require");

// 第二次 require（同路径）
const b = require("./lib/cardsIndex");
console.log("after second require");

console.log("same object?", a === b);
