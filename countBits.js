const countBits = function (n) {
  const final = n
    .toString(2)
    .split("")
    .reduce((acc, e) => (e === "1" ? acc + 1 : acc + 0), 0);

  console.log(final);
};
countBits(12345);