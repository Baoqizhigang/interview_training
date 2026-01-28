// day5_indexByTag.js


/*
JS 知识点：map() vs filter()、对象当字典、in、hasOwnProperty 的直觉
练习（纯 JS）：写 indexByTag(cards) 把数组变成 { event:[...], page:[...], grid:[...] }
工程（SSOT）：做一个 lib/cardsIndex.js，导出 getCardsByTagFast(tag)（用索引表加速）

module.exports = [
  { title: "Scoop AI Hackathon", tag: "event" },
  { title: "Landing Page", tag: "page" },
  { title: "Winning Projects", tag: "grid" },
];
*/

// 在 Node.js 里，require(...) 用来“导入另一个文件导出的东西”
// ./data/cards 是一个相对路径：从当前文件所在目录出发，去 data 文件夹里找 cards.js（.js 可省略）。
const cards = require("./data/cards");

// 目标：把 cards 变成一个索引表
// {
//      event: [ {title:"A", tag:"event"}, ... ],
//      page:  [ {title:"B", tag:"page"}, ... ],
//      grid:  [ {title:"C", tag:"grid"}, ... ]
// }
function indexByTag(cards) { // 这里参数也叫 cards，它是函数的“局部变量”. 它会遮蔽外层的 const cards（但这不冲突）

    const index = {}; // 创建一个空对象 {} , 一个“字典/哈希表”。
                            /*
                            index = {
                                event: [ ... ],
                                page: [ ... ],
                                grid: [ ... ],
                            }
                            */

    if (!Array.isArray(cards)) return index; // 确保传进来的是数组

    for (const c of cards) { // 每个元素 c 是一个对象（Object），至少有 tag 字段 
    // 把数组里每个元素依次拿出来赋值给 c -{ title: "Scoop AI Hackathon", tag: "event" },
        const tag = c.tag;   // 取出当前卡片的 tag 字段 - "event"

        // 1) 如果 index[tag] 还不存在，先创建一个空数组
        // index 是对象, tag 是变量（比如 "event"）, index[tag] 表示：访问对象里“键名为 tag 的那一项”
        // 这一步的意义：做“分类桶”，每个 tag 要对应一个数组。 第一次遇到这个 tag，要先开桶。
        if (!(tag in index)) index[tag] = []; //if the key doesn’t exist, initialize an empty array

        // 2) 把当前卡片 push 进去
        index[tag].push(c);

        console.log("tag =", tag, "after:", index[tag]);
    }
  return index;  
}

// tests
const idx = indexByTag(cards);
console.log(idx);
// 语法点：Object.keys(obj) - 返回对象所有键名组成的数组
console.log(Object.keys(idx));      // 例如：["event","page","grid"]
console.log(Object.values(idx));     
console.log(idx.event);             // 输出 event 的卡片数组
console.log(idx.page);              // 输出 page 的卡片数组