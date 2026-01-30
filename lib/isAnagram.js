// lib/isAnagram.js
const { countChars } = require("./countChars");

function isAnagram(s, t, options = {}) {
  if (typeof s !== "string" || typeof t !== "string") return false;

  const ignoreCase = options.ignoreCase === true;
  if (ignoreCase) {
    s = s.toLowerCase();
    t = t.toLowerCase();
  }

  if (s.length !== t.length) return false;

  const count = countChars(s); // 注意：这里我们已经在 isAnagram 里 lowerCase 了，所以不用再传 ignoreCase

  for (const ch of t) {
    if (!count[ch]) return false;
    count[ch]--;
  }

  return true;
}

module.exports = { isAnagram };

