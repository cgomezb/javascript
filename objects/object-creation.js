// Creation

var newObject = {};
// or
var newObject = Object.create(Object.prototype);
// or
var newObject = new Object();

// Set and get keys and values

// 1. Dot sintax
newObject.someKey = 'Hello World';
const value = newObject.someKey;

// 2. Square bracket syntax
newObject['someKey'] = 'Hello World';
const value = newObject['someKey'];

// 3. Object define property
Object.defineProperty(newObject, 'someKey', {
  value: 'Hello World',
  writable: true,
  enumerable: true,
  configurable: true
});

// Short-hand
var defineProp = function(obj, key, value) {
  var config = {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  }
  Object.defineProperty(obj, key, config);
}

const person = Object.create(Object.prototype);

defineProp(person, 'car', 'Delorean');
defineProp(person, 'dateOfBirth', '1981');
defineProp(person, 'hasBeard', 'Delorean');

console.log(person);
// Outputs: Object {car: "Delorean", dateOfBirth: "1981", hasBeard: false}

// 4. Object define properties
Object.defineProperties(newObject, {
  'someKey': {
    value: 'Hello World',
    writable: true
  },
  'anotherKey': {
    value: 'Another value',
    writable: false
  }
});

// Inherit from person
const driver = Object.create(person);
defineProp(driver, 'topSpeed', '100mph');
console.log(driver.dateOfBirth);
// Outputs: 1981

console.log(driver.topSpeed);
// Outputs: 100mph
