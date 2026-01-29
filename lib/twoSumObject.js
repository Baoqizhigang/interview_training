function twoSumObject(nums, target) {
  if (!Array.isArray(nums)) return null;
  if (typeof target !== "number") return null;

  const seen = {}; // 值 -> 下标（注意：对象的 key 会变成字符串）

  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    const need = target - x;

    // TODO-1: 判断 need 是否已经出现过（提示：need in seen）
    if (need in seen) {
      return [seen[need], i];
    }
    // TODO-2: 如果出现过，返回 [seen[need], i]
    // TODO-3: 否则记录 seen[x] = i
    seen[x] = i;
  }
  return null;
}

module.exports = { twoSumObject };
