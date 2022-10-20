// USE this instead of [...arr]

Array.prototype.square = function () {
  console.log(this.map((n) => n * n));
};
Array.prototype.cube = function () {
  let arr = this;
  console.log([...arr].map((n) => n * n * n));
};
Array.prototype.average = function () {
  let arr = this;
  console.log([...arr].reduce((acc, el) => acc + el, 0) / arr.length);
};
Array.prototype.sum = function () {
  let arr = this;
  console.log([...arr].reduce((acc, el) => acc + el, 0));
};
Array.prototype.even = function () {
  let arr = this;
  console.log([...arr].filter((n) => n % 2 === 0));
};

Array.prototype.odd = function () {
  let arr = this;
  console.log([...arr].filter((n) => n % 2 !== 0));
};

const numbers = [1, 2, 3, 4, 5];
numbers.square();
numbers.cube();
numbers.sum();
numbers.average();
numbers.even();
numbers.odd();
console.log(numbers);
