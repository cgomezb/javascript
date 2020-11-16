const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second);

// Extract values from position 2 to position 4
const slice = combined.slice(2, 4);

// Extract values from position 2 
const slice = combined.slice(2);

// Get a copy of the array
const slice = combined.slice();

console.log(combined);
console.log(slice);

// Get the last items
const last = combined.slice(-1);
console.log(last); // [6]

const last = combined.slice(-2);
console.log(last); // [5, 6]
