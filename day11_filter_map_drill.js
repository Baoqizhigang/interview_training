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

// day11_filter_map_drill.js
// 目标：手写 myMap / myFilter（不要用内置 map/filter）

function myMap(arr, fn) {
    // TODO-0: 防御式检查：arr 必须是数组，fn 必须是函数
    if (!Array.isArray(arr) || typeof fn !== "function") {
        return [];
    }
    // 不合法就 return []
    
    // TODO-1: 创建结果数组 result
        const result = [];
    // TODO-2: for 循环遍历 arr
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // TODO-3: 对每个元素调用 fn(element, index, arr)
        const value = fn(element, i, arr);
        // TODO-4: 把返回值 push 到 result
        result.push(value);
        console.log("i =", i, "element =", element);
        console.log("fn returns =", value);
    }
    // TODO-5: return result
    return result;
}

function myFilter(arr, fn) {
    // TODO-0: 防御式检查：arr 必须是数组，fn 必须是函数
    if (!Array.isArray(arr) || typeof fn !== "function") {  
        return [];
    }
    // 不合法就 return []
    
    // TODO-1: 创建结果数组 result
    const result = [];
    // TODO-2: for 循环遍历 arr
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        // TODO-3: 对每个元素调用 fn(element, index, arr)
        const value = fn(element, i, arr);  
        // TODO-4: 如果返回值为 true，就把原元素 push 到 result
        if (value) {
        result.push(element);
        }
    }
    // TODO-5: return result
    return result;
}

// ----------------------
// tests（你跑通这些输出就算过关）
// ----------------------

const nums = [10, 20, 30];

// map: 每个元素 *2
console.log("myMap *2:", myMap(nums, (x) => {
  return x * 2;
})); 
// 期望: [20, 40, 60]

// map: 用 index 做加法
console.log("myMap +index:", myMap(nums, (x, i) => {
  return x + i;
}));
// 期望: [10, 21, 32]

// filter: 只保留 >= 20
console.log("myFilter >=20:", myFilter(nums, (x) => {
  return x >= 20;
}));
// 期望: [20, 30]

// filter: 只保留偶数下标的元素
console.log("myFilter even index:", myFilter(nums, (x, i) => {
  return i % 2 === 0;
}));
// 期望: [10, 30]

// 防御式测试
console.log("bad arr:", myMap(null, (x) => { return x; })); // []
console.log("bad fn:", myFilter(nums, null));              // []


