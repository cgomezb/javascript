function sum(a, b) {
  console.log(arguments);
  return a + b;
}

console.log(sum()); // NaN
console.log(sum(1)); // NaN
console.log(sum(1, 2)); // 3
console.log(sum(1, 2, 3, 4, 5)); // 3

function sumArg() {
  let total = 0;
  for (let value of arguments) {
    total += value;
  }
  return total;
}

console.log('Total: ', sumArg(1, 2, 3, 4, 5, 6));
