// day10_server.js
const http = require("http");
const { URL } = require("url");
const { sendJson } = require("./lib/sendJson");

// 你暂时继续用这个“故意 undefined”测试
const cards = undefined;

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://localhost:3000");

  if (req.method !== "GET") {
    return sendJson(res, 405, { error: "Method Not Allowed" });
  }

  if (url.pathname === "/cards") {
    const tag = url.searchParams.get("tag");

    if (tag) {
      return sendJson(res, 200, [{ title: "demo", tag }]);
    }

    // 继续测试 undefined 是否会被 sendJson 处理成 500 + error body
    return sendJson(res, 200, cards);
  }

  return sendJson(res, 404, { error: "Not Found" });
});

server.listen(3000, () => {
  console.log("Day10 server running at http://localhost:3000");
  console.log("Try:");
  console.log("  curl http://localhost:3000/cards");
  console.log("  curl http://localhost:3000/cards?tag=event");
});


/*你要写进“工程笔记”的模板（照抄） Day10 — Extract sendJson into a module

Files
    lib/sendJson.js: response helper (封装输出 JSON + 错误兜底)
    day10_server.js: server + routing only (不包含 sendJson 本体)

Runtime animation
    node day10_server.js
    Node loads day10_server.js
    It require("./lib/sendJson") → runs lib/sendJson.js once → gets { sendJson }
    Incoming request → route decides what data to respond with
    Route calls sendJson(res, ...) → helper serializes + writes headers + ends response

Key concept
    Server file focuses on routing
    Helper module focuses on response formatting
    This separation makes code easier to reuse and maintain
*/