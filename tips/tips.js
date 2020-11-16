// Method parameter validation
const isRequired = () => { throw new Error('param is required'); };
const print = (num = isRequired(num)) => { console.log(`Printing ${num}`); };

print('Text');  // Printing Text
print(null);    // Printing null
print();        // Error


// Format JSON code
console.log(JSON.stringify({ name: "John", age: 23 }, null, '\t'));


// Unique values from an array
const elements = [1, 2, 3, 3, 3, "school", "school", 'ball', false, false, true, true];
let uniqueElements = [...new Set(elements)];
console.log(uniqueElements);


// Remove falsy values from array
const falsyValues = [undefined, null, NaN, 0, '', false];
const values = falsyValues.filter(Boolean);
console.log(values); // []

// We can also perform some operation before filter the final result
const falsyValues = [undefined, null, NaN, 0, '', false];
const values = 
  falsyValues
  .map(element => {
    return element + 1;
  })
  .filter(Boolean);

console.log(values); // [1, 1, "1", 1]


// Sort number array
const numbers = [1, 10, 2, 9, 3, 5, 12];
const sortedAsc = numbers.slice().sort((a, b) => a - b);
const sortedDesc = numbers.slice().sort((a, b) => b - a);
console.log('Asc ', sortedAsc);
console.log('Desc ', sortedDesc);
