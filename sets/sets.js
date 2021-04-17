// Sets

// Store by default only unique values
const foodSet = new Set(['Pasta', 'Pizza', 'Pasta', 'Sandwich', 'Pizza']);
console.log(foodSet); // 'Pasta' 'Pizza' 'Sandwich'

// Store any kind of data also
const combineDataSet = new Set(['', true, 1, ' ', false, 2, true]);
console.log(combineDataSet); // '', true, 1, ' ', false, 2

// Store an iterable content
const stringSet = new Set('JohnSmith');
console.log(stringSet); // J o h n S m i t

// Set can start empty
const emptySet = new Set();
console.log(emptySet);

// Characteristic

const newSet = new Set([1, 2, 3, 4, 5]);

// Size
console.log(newSet.size); // 5

// has
console.log(newSet.has(1)); // true
console.log(newSet.has('1')); // false
console.log(newSet.has(6)); // false

// add
newSet.add(0); // add 0 to the end of the set
//  1 2 3 4 5 0

// delete
newSet.delete(0); // true

// clear (Delete of the element)
newSet.clear();

// Looping
for (const element of newSet) {
  console.log(element);
}

// Example
// Remove duplicate elements from an array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique); // Waiter Chef Manager

// Create an array based on a set
const arrayStaffUnique = [...staffUnique];
console.log(arrayStaffUnique); // ['Waiter', 'Chef', 'Manager']

// Count the amount of different characters
const personName = 'johnsmith';
const amount = (new Set(personName)).size;
console.log(amount);

// ForEach
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'USD']);

currenciesUnique.forEach(function(value, _, map) {
  console.log(`${value}: ${value}`);
});
