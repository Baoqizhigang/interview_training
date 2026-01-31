// lib/sendJson.js

function sendJson(res, statusCode, data) {
  let body = JSON.stringify(data);

  if (body === undefined) {
    statusCode = 500;
    body = JSON.stringify({ error: "Internal Server Error: data is undefined" });
  }

  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Content-Length": Buffer.byteLength(body),
  });

  res.end(body);
}

// 这个文件对外只公开一个东西：sendJson 函数（包在对象里); 别的文件 require("./lib/sendJson") 拿到的就是 { sendJson: [Function] }
module.exports = { sendJson };
