function noSpace(x) {
  const myArr = x.split(' ').join('');
  console.log(myArr);
  return myArr;
}
const str = ' wer rew 345 grwsg';
noSpace(str);
