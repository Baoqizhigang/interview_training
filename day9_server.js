// day8_server.js
// Node 自带的 http 模块, 用来创建一个最基础的 HTTP 服务器（不需要 Express）
const http = require("http"); 

/*   Node 的 URL 解析器, 把 /cards?tag=event 解析成：
pathname: /cards
searchParams: { tag: "event" }   */
const { URL } = require("url");

// ode 一启动，先执行这些 require。require 会把对应文件 “跑一遍”，得到 module.exports 里的东西。
const { cards, getCardsByTagFast } = require("./lib/cardsIndex");

function sendJson(res, statusCode, data) { // res 是 Node 的“响应对象”，用它把数据回给浏览器/客户端
  // const body = JSON.stringify(data); // JSON.stringify(data)：把 JS 对象/数组变成字符串（因为网络上传的是文本/字节）

  let body = JSON.stringify(data);

  // 
  if (body === undefined) {
    statusCode = 500;
    body = JSON.stringify({ error: "Internal Server Error: data is undefined" });
  }

  res.writeHead(statusCode, {  // writeHead：设置 HTTP 状态码 + 响应头
    "Content-Type": "application/json", // Content-Type：告诉浏览器“我发的是 JSON”
    "Content-Length": Buffer.byteLength(body), // Content-Length：告诉浏览器“我发了多少字节”（有些客户端依赖它）
  }); 
  res.end(body); //res.end(body)：真正把内容发出去，并结束这次请求

}

//每次有人访问你的服务器，Node 就会调用这个回调函数: req 是“请求”（对方要什么）; res 是“响应”（你要回什么）
const server = http.createServer((req, res) => {
  // req.url 在 Node 里通常是类似："/cards" 或者是"/cards?tag=event"
  // 但 new URL() 需要一个“完整 URL”，所以加一个 base："http://localhost:3000"
  // 于是获得一个 url 对象，里面有：url.pathname → /cards 或者是 url.searchParams.get("tag") → "event" 或 null
  const url = new URL(req.url, "http://localhost:3000");

  // HTTP 有很多方法：GET/POST/PUT/DELETE…本文件训练目标是最小 API，所以先只支持 GET
  // 405 是标准的“方法不允许”
  if (req.method !== "GET") {
    return sendJson(res, 405, { error: "Method Not Allowed" });
  }

  if (url.pathname === "/cards") {
    const tag = url.searchParams.get("tag");

    /*情况 A：访问 /cards?tag=event
            pathname === "/cards" ✅
            tag = "event" ✅
            进入 if (tag) 分支：
                调用 getCardsByTagFast("event")
                返回 [ { title: "...", tag: "event" } ]
            sendJson 把数组 stringify 成字符串发回浏览器 */
    if (tag) {
      return sendJson(res, 200, getCardsByTagFast(tag));
    }

    /*情况 B：访问 /cards
            pathname === "/cards" ✅
            tag = null（因为没 query）
        跳过 if (tag)
        执行：sendJson(res, 200, undefined)
        练习：故意传 undefined，看 sendJson 会不会崩 */
    return sendJson(res, 200, undefined);
  }

    // 兜底 404: 访问其它路径，比如 /abc，就返回 404
  return sendJson(res, 404, { error: "Not Found" });
});

//  监听端口（真正“开始营业”）:让 server 在 3000 端口开始接请求,之后浏览器访问 http://localhost:3000/... 才会被代码处理
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
  console.log("Try:");
  console.log("  curl http://localhost:3000/cards");
  console.log("  curl http://localhost:3000/cards?tag=grid");
});


/*
Day8 你今天要写的工程笔记模板（照抄）
Day8 — 最小后端 API（Node http）

Files:
data/cards.js: SSOT 数据源
lib/cardsIndex.js: 模块加载时构建索引 cache，提供 getCardsByTagFast(tag)
day8_server.js: HTTP server，路由 /cards，支持 query tag

Runtime animation:
node day8_server.js 启动服务器
server require cardsIndex → 模块加载时构建 cardsByTag（一次）
请求 /cards?tag=event → server 调用 getCardsByTagFast("event") → O(1) 返回结果
输出 JSON 给客户端（curl）
*/