function sum(num) {
  if (num < 10) {
    return num;
  } else {
    return num + sum(num - 1);
  }
}
let num = 22;
console.log(sum(num));

/////////////////////////////////////////////////////////////////////////////////

function sumNum(summary) {
  if (summary < 10) {
    return 1;
  }
  return 1 + sumNum(Math.floor(summary / 10));
}

let summary = 3322;
console.log(sumNum(summary));
