// return the sum of every whole number from n down to 1

const sum = n => {  
  if (n > 1) {
    return n + sum(n - 1);
  }
  return n;
  // -- other solution --
  // if (n === 1) {
  //   return 1;
  // }
  // return n + sum(n - 1);
};
console.log(sum(5));  // 15