const numbers = [1, 2, 3, 4];

// End
const last = numbers.pop();
console.log(numbers);
console.log(last);

// Beginning
const first = numbers.shift();
console.log(numbers);
console.log(first);

// Middle
// Remove element from position 2
// Amount of elements to remove 1
numbers.splice(2, 1)
console.log(numbers);
