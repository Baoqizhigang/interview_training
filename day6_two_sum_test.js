// day6_two_sum_test.js
const { nums, target } = require("./data/nums");
const { twoSum } = require("./lib/twoSum");
const { twoSumObject } = require("./lib/twoSumObject");

console.log("nums:", nums);
console.log("target:", target);

const ans = twoSum(nums, target);
console.log("answer:", ans);

const ansObj = twoSumObject(nums, target);
console.log("answer from twoSumObject:", ansObj);