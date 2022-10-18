function alphanumeric(string) {
  //your code here\

  let reg = /^[^ _|!]+$/;
  const myArr = reg.test(string);
  console.log(myArr);
  return myArr;
}
str = "Hello9586578 Worlo!d";
alphanumeric(str)