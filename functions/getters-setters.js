const person = {
  firstName: 'Cesar',
  lastName: 'Gomez',
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
}

person.fullName = 'Test Case';

console.log(person.fullName);
