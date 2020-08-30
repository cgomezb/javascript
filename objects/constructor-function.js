function Person(name, age) {
  this.name = name;
  this.age = age;
  this.draw = function() {
    console.log('draw');
  }
}

const person1 = new Person('Cesar', 30);
console.log(person1);
