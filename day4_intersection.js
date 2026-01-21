// day4_intersection.js  该文件用于测试算法题：两个数组的交集（不含重复元素）
const intersectionUnique = require("./lib/intersectionUnique");

console.log(intersectionUnique([1,2,2,1], [2,2]));        // [2]
console.log(intersectionUnique([4,9,5], [9,4,9,8,4]));    // [9,4] or [4,9]
console.log(intersectionUnique([], [1,2]));               // []
console.log(intersectionUnique(null, [1,2]));             // []


