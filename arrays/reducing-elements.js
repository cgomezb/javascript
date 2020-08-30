const numbers = [1, 2, 3, 4];

let sum = 0;
for (let n of numbers) {
  sum += n;
}

console.log(sum);

const total = numbers
  .reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(total);
