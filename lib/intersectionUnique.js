// lib/intersectionUnique.js
function intersectionUnique(nums1, nums2) {
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) return [];

  // 用 Set 去重 + O(1) 查询
  const set1 = new Set(nums1);
  const resultSet = new Set();

  for (const x of nums2) {
    if (set1.has(x)) resultSet.add(x);
  }

  return [...resultSet];
}

module.exports = intersectionUnique;
