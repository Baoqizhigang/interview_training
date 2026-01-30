// lib/countChars.js
function countChars(s, options = {}) {
  const count = {};
  if (typeof s !== "string") return count;

  const ignoreCase = options.ignoreCase === true;
  if (ignoreCase) {
    s = s.toLowerCase();
    }

  for (const ch of s) {
    count[ch] = (count[ch] || 0) + 1;
  }

  return count;
}

module.exports = { countChars };
