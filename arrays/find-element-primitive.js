const numbers = [1, 2, 3, 1, 4];

// array.indexOf(element, start)
// array.lastIndexOf(element, start)
// array.includes(element, start)
console.log('1 first index', numbers.indexOf(1));
console.log('1 last index', numbers.lastIndexOf(1));
console.log('1 Exists?', numbers.indexOf(1) !== -1);
console.log('1 Exists?', numbers.includes(1));
