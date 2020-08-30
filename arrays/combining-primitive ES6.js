const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];
console.log(combined);

const copy = [... combined];
console.log(copy);
