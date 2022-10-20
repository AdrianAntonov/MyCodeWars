function findShort(s) {
  const word = s
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .shift().length;
  console.log(word);
}
const arr = "a qwertty abvgdeika b";
findShort(arr);