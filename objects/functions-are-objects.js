function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.walk = function() {
    console.log('walk');
  }
}

// console.log(Person.length); // Amount of parameters
// console.log(Person.constructor);

// const person = new Person('Cesar');
// console.log(person);

/* Create a Function */

// const Person1 = new Function('name', 'lastName', `
//   this.name = name;
//   this.lastName = lastName;
//   this.walk = function() {
//     console.log('walk');
//   }`)

// const anotherPerson = new Person1('Cesar', 'Gomez');

/* Function methods */

// call
let newPerson = {};

Person.call(newPerson, 'Cesar', 'Gomez');
console.log(newPerson);

// apply
Person.apply(newPerson, ['Cesar', 'Gomez']);
console.log(newPerson);
