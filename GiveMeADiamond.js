function diamond(n) {
  if (n <= 0 || n % 2 === 0) {
    return null;
  }
  let diam = "";
  let space = " ";
  let star = "*";
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) diam += `${space.repeat((n - i) / 2)}${star.repeat(i)}\n`;
  }
  for (let i = n - 1; i > 0; i--) {
    if (i % 2 !== 0) diam += `${space.repeat((n - i) / 2)}${star.repeat(i)}\n`;
  }

  return diam;
}

console.log(diamond(3));
