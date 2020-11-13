const manager = { name: 'Jim', age: 40 };
const developer = { name: 'Jim', age: 20 };
const tester = { name: 'Jim', age: 30 };

// Display data as a object with CSS format
console.log('%c Employees', 'color: orange; font-weight: bold')
console.log({ manager, developer, tester });


// Display data as a table
console.table([manager, developer, tester]);


// Timer operation
console.time('Looper');

let i = 0;
while (i < 10000000) {
  i++;
}

console.timeEnd('Looper');


// Stack trace logs

const operation = () => { console.trace('Performed operation') };

operation();
operation();


// Template literal

const turtle = { age: 6 };

function animalAge(str, age) {
  debugger
  const ageStr = age > 5 ? 'old' : 'young';
  return `${str[0]}${ageStr} at ${age} years`;
}

const animalAgeStr = animalAge`This animal is ${turtle.age}`;
console.log(animalAgeStr);


// Async and await

const random = () => {
  return Promise.resolve(Math.random());
}

const sumRandomAsyncNums = async() => {
  const first = await random();
  const second = await random();
  const thrid = await random();

  console.log(`Result ${first + second + thrid}`);
};

if (await random()) {
  console.log('After random response')
}

const randoms = Promise.all([
  random(),
  random(),
  random()
]);

for (const random of await randoms) {
  console.log(random);
}


// Using Closure

// Without closure
function findCustomerCity(name) {
  const texasCustomers = ['John', 'Ludwig', 'Kate']; 
  const californiaCustomers = ['Wade', 'Lucie','Kylie'];
  
  return texasCustomers.includes(name) ? 'Texas' : 
    californiaCustomers.includes(name) ? 'California' : 'Unknown';
};

cityOfCustomer('John');  // Texas
cityOfCustomer('Wade');  // California
cityOfCustomer('Max');   // Unknown

// With closure
function findCustomerCity() {
  const texasCustomers = ['John', 'Ludwig', 'Kate']; 
  const californiaCustomers = ['Wade', 'Lucie','Kylie'];
  
  return name => texasCustomers.includes(name) ? 'Texas' : 
    californiaCustomers.includes(name) ? 'California' : 'Unknown';
};

let cityOfCustomer = findCustomerCity();

cityOfCustomer('John');   // Texas
cityOfCustomer('Wade');   // California
cityOfCustomer('Max');    // Unknown


// Other example
const included = () => {
  const validName = ['alpha', 'beta', 'omega'];

  return name => validName.includes(name.toLowerCase());
}

const validation = included();

validation('alpha'); // true
