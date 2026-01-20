// lib/hasDuplicate.js
function hasDuplicate(arr) {
  // 输入保护：不是数组就认为“没有重复”
  if (!Array.isArray(arr)) return false;

  const seen = new Set();

  for (const x of arr) {
    if (seen.has(x)) return true; // 发现重复，立刻返回
    seen.add(x);
  }

  return false; // 扫完都没重复
}

module.exports = hasDuplicate; //module.exports = [...] 意味着“这个文件导出的值就是这个数组”。
