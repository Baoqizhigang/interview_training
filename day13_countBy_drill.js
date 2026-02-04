// day13_countBy_drill.js

function countBy(arr, keyFn) {
  // TODO-0: 防御式：arr 必须是数组；keyFn 必须是函数
  // 不合法 -> return {}
  if (!Array.isArray(arr) || typeof keyFn !== "function") {
    return {};
  }

  // TODO-1: 用 reduce 做计数表
  // 提示：acc 是对象，key = keyFn(item)
  // acc[key] = (acc[key] || 0) + 1
  const table = arr.reduce((acc, item) => {
    const key = keyFn(item);

    acc[key] = (acc[key] || 0) + 1;
    return acc;-
  }, {});

  return table;
}

// tests
const cards = [
  { title: "A", tag: "event" },
  { title: "B", tag: "page" },
  { title: "C", tag: "event" },
];

console.log(countBy([10, 20, 30], (x) => x % 10)); 
// 期望：{ '0': 3 }

console.log(countBy(cards, (c) => c.tag)); 
// 期望：{ event: 2, page: 1 }

console.log(countBy("not array", (x) => x)); 
// 期望：{}
