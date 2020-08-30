function createPerson(name, age) {
  return {
    name,
    age,
    walk() {
      console.log('walk');
    }
  }
}

const person1 = createPerson('Cesar', 30);
console.log(person1);

const person2 = createPerson('Augusto', 30);
console.log(person2);
