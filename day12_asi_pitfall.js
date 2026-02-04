// day12_asi_pitfall.js
// 目的：把“为什么分号有时不能省略”变成你脑内的动画

console.log("case A: safe");
console.log("Hello");
[1, 2].forEach((n) => {
  console.log("n =", n);
});

console.log("\ncase B: ASI pitfall demo (comment/uncomment to see)");

// 把下面两行取消注释试试：
console.log("Hello")
[1, 2].forEach((n) => {
  console.log("n =", n);
});
