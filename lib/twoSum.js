// lib/twoSum.js

function twoSum(nums, target) {
  // 防御式：你现在可以先保留这种检查
  if (!Array.isArray(nums)) return null;
  if (typeof target !== "number") return null;

  // indexMap: 值 -> 下标
  const indexMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    const need = target - x;

    // 如果 need 已经出现过，直接返回答案
    if (indexMap.has(need)) {
      return [indexMap.get(need), i];
    }

    // 否则把当前值记录下来（为后面的数服务）
    indexMap.set(x, i);
  }

  return null;
}

module.exports = { twoSum };
