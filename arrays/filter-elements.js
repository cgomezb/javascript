const numbers = [1, -2, 3, 4];

const filtered = numbers.filter(function(value) {
  return value >= 0;
});

console.log(filtered);

const filteredArrow = numbers.filter(n => n >= 0);
console.log(filteredArrow);
