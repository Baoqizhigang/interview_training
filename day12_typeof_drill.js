// node 
const samples = [
  123,
  "hi",
  true,
  undefined,
  null,
  { a: 1 },
  [1, 2, 3],
  function f() {},
];

for (const v of samples) {
  console.log(v, "=> typeof:", typeof v);
}
