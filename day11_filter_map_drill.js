/*Day11 — JS 深入点：数组方法 map/filter 的“回调函数机制”

JS滴灌（深入点）
    arr.map(fn)：每个元素都执行 fn，返回新数组
    arr.filter(fn)：fn 返回 true 才留下，返回新数组
    关键：fn(element, index, array) 这三个参数的意义

JS小练习（新文件：day11_filter_map_drill.js）
    手写 myFilter(arr, fn)（不用内置 filter）
    手写 myMap(arr, fn)（不用内置 map）
    跑通测试输出即可。

工程化练习
    把你现有 getCardsByTagFast 的逻辑，加一个新 API：
    GET /tags → 返回 ["event","page","grid"]
    你会用到：Object.keys(cardsByTag) 或 new Set(cards.map(...))

✅ 当天验收输出： curl http://localhost:3000/tags 能返回 tags 数组 */