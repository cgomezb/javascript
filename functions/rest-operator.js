// Put all arguments to an array
function sum(...args) {
  return args.reduce((a, b) => a + b);
}  

console.log(sum(1, 2, 3, 4, 5, 6));

function total(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  return total * (1 - discount);
}

console.log(total(0.1, 20, 30));
