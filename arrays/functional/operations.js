// Modifing an array without changing the original array

const numbers = [1, 2, 3];
const newElement = 4;

// Adding at the beginning
const newNumbers = [newElement, ...numbers];
console.log(newNumbers);
console.log(numbers);

// Adding at the end
const newNumbers = [...numbers, newElement];
console.log(newNumbers);
console.log(numbers);

// Adding on a specific point (before element 2 for example)
const index = numbers.indexOf(2);
const newNumbers = [
    ...numbers.slice(0, index),
    newElement,
    ...numbers.slice(index)
];
console.log(newNumbers);
console.log(numbers);

// Removing a specific element
const elementToRemove = 2;
const newNumbers = numbers.filter(n => n !== 2);
console.log(newNumbers);
console.log(numbers);

// Updating 2 by 8

const updated = numbers.map(n => n === 2 ? 8 : n);
console.log(newNumbers);
console.log(numbers);
