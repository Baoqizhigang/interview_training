// lib/myReduce.js

function myReduce(arr, fn, init) {
  // TODO-0: 防御式检查
  if (!Array.isArray(arr) || typeof fn !== "function") {
    throw new TypeError("myReduce: arr must be an array and fn must be a function");
  }

  // TODO-1: 判断调用者有没有传 init（不要用 init === undefined！）
  const hasInit = arguments.length >= 3;

  // TODO-2: 处理空数组
  if (arr.length === 0) {
    if (hasInit) {
      return init;
    }
    throw new TypeError("myReduce: Reduce of empty array with no initial value");
  }

  // TODO-3: 初始化 acc 和起始下标 startIndex
  let acc;
  let startIndex;

  if (hasInit) {
    acc = init;
    startIndex = 0;
  } else {
    acc = arr[0];
    startIndex = 1;
  }

  // TODO-4: for 循环滚动更新 acc
  for (let i = startIndex; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, arr);
  }

  // TODO-5: return acc
  return acc;
}

module.exports = { myReduce };
