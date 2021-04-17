'use strict'

// Constructor Functions
const Person = function(firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  // this.calcAge = function() {
  //   console.log(2037 - this.birthYear);
  // }
};

const jack = new Person('Jack', 1985);
console.log(jack);

console.log(jack instanceof Person);

// Steps using new operator
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. fuction automatically return {}

// Prototypes

console.log(Person.prototype);

Person.prototype.calcAge = function() {
  console.log(2037 - this.birthYear);
}

Person.prototype.species = 'Homo Sapiens';

// Method form propotype
console.log(jack.calcAge());
// Property form propotype
console.log(jack.species);

console.log(jack.__proto__);
console.log(jack.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(jack));

console.log(jack.hasOwnProperty('firstName'));  // true
console.log(jack.hasOwnProperty('species'));    // false

console.log(jack.__proto__);
// Object.prototype (top of prototype chain)
console.log(jack.__proto__.__proto__);
console.log(jack.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 6, 9, 3];
// Same:
// const array = new Array(3, 6, 4, 5, 6, 9, 3);

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
// Object.prototype (top of prototype chain)
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.log(h1.__proto__);                                                    // HTMLHeadingElement
console.log(h1.__proto__.__proto__);                                          // HTMLElement
console.log(h1.__proto__.__proto__.__proto__);                                // Element
console.log(h1.__proto__.__proto__.__proto__.__proto__);                      // Node
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__);            // EventTarget
console.log(h1.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__);  // Object

console.dir(x => x + 1);
// __proto__ => f ()
