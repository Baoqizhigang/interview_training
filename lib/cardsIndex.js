// lib/cardsIndex.js

console.log("cardsIndex.js loaded");


const cards = require("../data/cards");

function buildIndexByTag(cards) {
  console.log("building index...");
  const index = {};
  if (!Array.isArray(cards)) return index;

  for (const c of cards) {
    const tag = c.tag;

    // 更稳的“开桶”判断
    if (!(tag in index)) index[tag] = [];

    index[tag].push(c);
  }

  return index;
}

// 模块加载时：构建一次索引（类似 cache） - cardsByTag 是 构建一次，多次复用（避免每次都 filter）
const cardsByTag = buildIndexByTag(cards);

// getCardsByTagFast 是 API 形式的查询接口（页面不用知道内部细节）
function getCardsByTagFast(tag) {
  if (typeof tag !== "string") return [];
  const normalized = tag.toLowerCase();
  return cardsByTag[normalized] || [];
}

function getAllTags() {
  // tags 就是索引表的 keys
  return Object.keys(cardsByTag).sort();
}


module.exports = { cards, getCardsByTagFast, cardsByTag, getAllTags };


