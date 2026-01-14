// node day2_freq.js

function freq(arr) {
  const count = {};

  // TODO 1: 不是数组就直接返回 {}
  if (!Array.isArray(arr)) return count;
  //if (typeof arr !== Array) return count; // “输入保护

  // TODO 2: 遍历 arr，把每个元素出现次数累加到 count
  // 提示：count[x] = (count[x] || 0) + 1
  for (const x of arr) {
    count[x] = (count[x] || 0) + 1;
  }

  return count;
}

// tests
console.log(freq([1, 2, 1, 3]));        // { '1': 2, '2': 1, '3': 1 }
console.log(freq(["a", "b", "a"]));     // { a: 2, b: 1 }
console.log(freq([]));                  // {}
console.log(freq(null));                // {}
