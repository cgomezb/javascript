// It's so important the position here

// Swapping variables

let a = 1;
let b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

// Destructuring an iterable

function sumAndMultiply(a, b) {
  return [a+b, a*b];
}

const [sum, multiply, division = 'No division'] = sumAndMultiply(2, 3);

console.log(`Sum is ${sum}, Multiply is ${multiply}, division result ${division}`);

// ---------

function getValue() {
  return [1, 2, 3, 4, 5];
}

const [a, b, ...c] = getValue()
console.log(a); // 1
console.log(b); // 2
console.log(c); // [3, 4, 5]

// ---------

var map = new Map();
map.set(title, "Title");
map.set(author, "Author");

// Iterate over only the keys

for (var [key] of map) {
  console.log(key);
}

// Or iterate over only the values

for (var [,value] of map) {
  console.log(value);
}

// Another example using spread operator

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Getting first, second position
// Omitting thrid position
// Getting the rest of elements of the array
const [a, b, , ...c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // [4, 5, 6, 7, 8, 9, 10]

// Destructuring complex objects

var [foo, [[bar], baz]] = [1, [[2], 3]];

console.log(foo); // 1
console.log(bar); // 2
console.log(baz); // 3

// Default values

const [ numbers = []] = [];
console.log(numbers);
