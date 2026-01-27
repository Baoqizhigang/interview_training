// lib/getCardsByTag.js  数据文件只负责存数据（SSOT），业务逻辑放到 lib 里做“查询/过滤”。 -- （工程：SSOT 的“查询接口”）
const cards = require("../data/cards");

function getCardsByTag(tag) {
  if (typeof tag !== "string") return [];
  return cards.filter(c => c.tag === tag);
}

module.exports = getCardsByTag;




