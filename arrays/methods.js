let arr = ['a', 'b', 'c', 'd', 'e'];

// Slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());   // copy
console.log([...arr]);

// Splice: mutate arr
console.log(arr.slice(2));

// Reverse: mutate
console.log(arr.reverse());

// Concat
const letters = arr.concat(['z']);
console.log(letters);
console.log([...arr, ...['z']]);

// Join
console.log(arr.join(' - '));
