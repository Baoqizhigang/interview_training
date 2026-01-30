// day7_anagram_test.js
const { isAnagram } = require("./lib/isAnagram");

console.log("basic:");
console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false

console.log("case-insensitive:");
console.log(isAnagram("AAn", "naa", { ignoreCase: true })); // true
console.log(isAnagram("AAn", "nab", { ignoreCase: true })); // false
console.log(isAnagram("AAn", "naa", { ignoreCase: false })); // false
console.log(isAnagram("AAn", "nab", { ignoreCase: false })); // false

/*
Day7：你今天必须写进“工程笔记”的模板（照抄即可）
Day7 — Anagram 工程化
Files:
lib/countChars.js: 负责把字符串变成频率表（可复用工具）
lib/isAnagram.js: 业务逻辑：用频率表验证 anagram
day7_anagram_test.js: 入口文件：调用并打印验证结果

Runtime animation:
Node 运行 day7_anagram_test.js
require ./lib/isAnagram → isAnagram 内部 require countChars
调用 isAnagram(s,t) → 先处理 ignoreCase（可选）→ 长度检查 → countChars(s) → 扫 t 递减 → 结束返回

I extracted a reusable countChars helper to build a frequency table, then isAnagram becomes a simple validation over that table.
I handle input validation and an optional ignoreCase mode.
The test file calls the module with a few cases to ensure behavior stays correct when I change implementation.
This keeps the logic reusable and easier to maintain than duplicating counting logic in every function.

*/
