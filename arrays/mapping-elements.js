const numbers = [1, 2, 3, 4];

const filtered = numbers.filter(n => n >= 0);
const items = filtered.map(n => '<li>' + n + '</li>');
const html = '<ul>' + items.join('') + '</ul>';

console.log(html);

const anotherItems = filtered.map(n => ({ value: n }));
console.log(anotherItems);

const chainItems = numbers
  .filter(n => n >= 2)
  .map(n => ({ value: n }))
  .filter(obj => obj.value > 1)
  .map(obj => obj.value);

console.log(chainItems);
