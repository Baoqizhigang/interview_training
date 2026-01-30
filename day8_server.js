// day8_server.js
const http = require("http");
const { URL } = require("url");

const { cards, getCardsByTagFast } = require("./lib/cardsIndex");

function sendJson(res, statusCode, data) {
  const body = JSON.stringify(data);
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body),
  });
  res.end(body);
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:3000");

  if (req.method !== "GET") {
    return sendJson(res, 405, { error: "Method Not Allowed" });
  }

  if (url.pathname === "/cards") {
    const tag = url.searchParams.get("tag");

    if (tag) {
      return sendJson(res, 200, getCardsByTagFast(tag));
    }

    return sendJson(res, 200, cards);
  }

  return sendJson(res, 404, { error: "Not Found" });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
  console.log("Try:");
  console.log("  curl http://localhost:3000/cards");
  console.log("  curl http://localhost:3000/cards?tag=event");
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