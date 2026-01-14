//把“数据”从“逻辑/页面”里拿出来，以后改数据只改一个文件

/*隐藏技术点 1：模块缓存（module cache）:
同一个进程里，require("./data/cards") 第二次不会重新执行文件，而是直接从缓存拿同一个导出值（性能更好，也意味着如果导出对象被修改，
别处再 require 会看到修改后的结果）。
此时，cards的值就是：
[
  { title: "Scoop AI Hackathon", tag: "event" },
  { title: "Landing Page", tag: "page" },
  { title: "Winning Projects", tag: "grid" },
]
*/
const cards = require("./data/cards"); //导入数据, Node会寻找当前的data/cards.js文件，执行它，并把module.exports的值赋给cards变量

/* map：把数组里每个元素“映射”为一个新值，生成一个新数组。
“映射函数” 是： c => c.title
意思就是“取出每个对象的 title”， 等价于：
function(c) {
  return c.title;
}
隐藏技术点 2：map 不会修改原数组: cards 还是原来的对象数组; map(...) 返回一个新数组（titles）
console.log(...) 打印的是“titles数组”  */
console.log(cards.map(c => c.title));

/*这就是最小 SSOT 形态：

cards.js 只负责“存数据”

day2_ssot.js 只负责“读数据 + 用数据做事（渲染/打印）”

以后你要改数据，只改 cards.js，所有使用方都会同步拿到新数据。*/