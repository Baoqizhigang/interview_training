// day12_logic_value.js
console.log("A:", "hello" || "world");  // hello
console.log("B:", "" || "world");       // world
console.log("C:", "hello" && "world");  // world
console.log("D:", 0 && 999);            // 0

console.log("E:", !!"hello");           // true
console.log("F:", !!0);                 // false

/*
|| 返回“第一个真值”，找不到就返回最后一个
&& 返回“第一个假值”，都是真就返回最后一个
想把值“硬转成 boolean”，用 !!x
*/