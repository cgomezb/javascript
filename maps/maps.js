// Maps

const restaurant = new Map();
restaurant.set('name', 'Italiano');
restaurant.set(1, 'Firenze, Italy');
restaurant.set(2, 'Lisbon, Portugal');
restaurant.set(true, 'We are open');
restaurant.set(false, 'We are closed');

console.log(restaurant.get('name')); // Italiano
console.log(restaurant.get(1)); // 'Firenze, Italy' 
console.log(restaurant.get(true)); // 'We are open'

// The type of the key matters
console.log(restaurant.get('NAME')); // undefined
console.log(restaurant.get('1')); // undefined 
console.log(restaurant.get('true')); // undefined

// size
console.log(restaurant.size); // 5

// has
console.log(restaurant.get('name')); // true
console.log(restaurant.get('lastName')); // false

// delete
restaurant.delete(true); // true

// clear
restaurant.clear();

// Map can have an array as a key also
const newMap = new Map();
const array = [1,2];
newMap.set(array, 'Testing');
newMap.get(array); // Testing

// Map can have an dom object as a key also
const newDomMap = new Map();
newDomMap.set(document.querySelector('h1'), 'Heading');
console.log(newDomMap); // h1 => 'Heading'

// Another way to set values
const questionMap = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!']
]);
console.log(questionMap);

// Convert object to map
const days = {
  "monday": false,
  "tuesday": true,
  "wednesday": true,
  "thursday": true,
  "friday": false
};
const daysArray = Object.entries(days);
console.log(daysArray);
const daysMap = new Map(daysArray);
console.log(daysMap);

// Looping
const newMap = new Map();
newMap.set(1, 'one');
newMap.set(2, 'two');
newMap.set(3, 'three');

for (const element of newMap) {
  console.log(element);
}

for (const [key, value] of newMap) {
  console.log(`${key} => ${value}`);
}

// Example
console.log(questionMap.get('question'));
for (const [key, value] of questionMap) {
  if (typeof key === 'number') {
    console.log(`Options ${key}: ${value}`);
  }
}
const answer = Number(prompt('Your answer'));
console.log(answer);

const comparison = questionMap.get('correct') === answer;
console.log(questionMap.get(comparison));

// Convert map to array
const arrayFromMap = [...questionMap];

// Get keys
const keys = question.keys();

// Convert keys into an array
const keysArray = [...question.keys()];

// Get values
const keys = question.values();

// Convert values into an array
const keysArray = [...question.value()];

// ForEach
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling']
]);

currencies.forEach(function(value, key, map) {
  console.log(`${key}: ${value}`);
});
