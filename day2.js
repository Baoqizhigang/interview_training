// node day2.js

function countChars(s) {

    const count = {};
    if (typeof s !== 'string') return count; // “输入保护
    for (const ch of s) count[ch] = (count[ch] || 0) + 1;
    return count;
}

function firstUniqChar(s) {
    if (typeof s !== "string") return -1;
    const count = countChars(s);

    for (let i = 0; i < s.length; i++) {
        if (count[s[i]] === 1) return i;
    }

    return -1;
}

// --- tests ---
console.log("countChars tests:");
console.log(countChars(null));   // {}
console.log(countChars(123));    // {}
console.log(countChars("aab"));  // { a: 2, b: 1 }

console.log("\nfirstUniqChar tests:");
console.log(firstUniqChar("aab"));           // 2
console.log(firstUniqChar("leetcode"));      // 0
console.log(firstUniqChar("loveleetcode"));  // 2
console.log(firstUniqChar("aabb"));          // -1