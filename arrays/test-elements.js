const numbers = [-1, 2, 3];

const allPositive = numbers.every(function(value) {
  return value >= 0;
});

console.log(allPositive);

const atLeastOnePositive = numbers.some(function(value) {
  return value >= 0;
});

console.log(atLeastOnePositive);
