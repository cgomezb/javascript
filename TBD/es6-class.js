// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set firstName(name) {
    if (name) {
      this.firstName = name;
    }
  }
}

const jack = new PersonCl('Jack', 1985);
console.log(jack);
jack.calcAge();

console.log(jack.__proto__ === PersonCl.prototype);

PersonCl.prototype.greet = function() {
  console.log(`Hey ${this.firstName}`);
}

jack.greet();

// Classes are special function
// 1. Classes are not hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
