function squareDigits(num) {
  const arrNum = [];
  while (num) {
    arrNum.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  return Number(arrNum.map((num) => num * num, String).join(""));
}

squareDigits(12345);