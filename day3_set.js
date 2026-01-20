// day3_set.js
const hasDuplicate = require("./lib/hasDuplicate");

// tests
console.log(hasDuplicate([1, 2, 3, 1]));       // true
console.log(hasDuplicate([1, 2, 3]));          // false
console.log(hasDuplicate(["a", "b", "a"]));    // true
console.log(hasDuplicate([]));                 // false
console.log(hasDuplicate(null));               // false
console.log(hasDuplicate(123));                // false

// 小知识：Set 认为 NaN 和 NaN 是“同一个值”
console.log(hasDuplicate([NaN, NaN]));         // true
