function countChars(s) {
  const count = {};
  for (const ch of s) count[ch] = (count[ch] || 0) + 1;
  return count;
}

// tests
console.log(countChars("aab"));   // { a: 2, b: 1 }
console.log(countChars(""));      // {}
console.log(countChars("abca"));  // { a: 2, b: 1, c: 1 }
console.log(countChars("zzzyyyx")); // { z: 3, y: 3, x: 1 }
console.log(countChars("zereerwewerwwewr")); 

// node day1.js