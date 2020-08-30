const first = [{ id: 1 }];
const second = [4, 5, 6];

const combined = first.concat(second);
first[0].id = 10;

console.log(combined);
console.log(first);

/*
Using concat and splice methods
primitives are copied by value 
and object are copied by reference
*/
