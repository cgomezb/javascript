/* Reference are related */
/* Primitives are copied by their reference */

let x = { value: 5 };
let y = x;

x.value = 20;

console.log('x value:', x);
console.log('y value:', y);
