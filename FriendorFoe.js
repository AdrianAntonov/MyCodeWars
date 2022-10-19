function friend(friends) {
  const reg = /[a-zA=Z]+/gi;
  return friends.filter((i) => i.match(reg) && i.length === 4);
}