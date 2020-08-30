let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1
numbers = [];

console.log(numbers); // It's [];
console.log(another); // It's still [1, 2, 3, 4];

// Solution 2
numbers.length = 0;

console.log(numbers); // It's [];
console.log(another); // It's [];

// Solution 3
numbers.splice(0, numbers.length);

console.log(numbers); // It's [];
console.log(another); // It's [];

// Solution 4
while (numbers.length > 0) {
  numbers.pop();
}

console.log(numbers); // It's [];
console.log(another); // It's [];
