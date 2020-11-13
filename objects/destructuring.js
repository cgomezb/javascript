const person = {
  name: 'John',
  lastName: 'Smith',
  address: {
    city: 'New York',
    country: 'USA'
  }
}

// Destructuring

const { name, lastName, address: { city } } = person;
console.log(name);
console.log(lastName);
console.log(city);

// Renaming
// Default values

const { name: personName = 'No name' } = {};
console.log(personName);

// Using iterables

const people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
];

for (const {name: n, family: {father: f}} of people) {
  console.log(`Name: ${n}, Father: ${f}`);
}

// "Name: Mike Smith, Father: Harry Smith"
// "Name: Tom Jones, Father: Richard Jones"

// ----------- Computed object property names ---------------

let key = 'title';
let { [key]: movieTitle } = { title: 'Title of the movie' };

console.log(movieTitle); // "Title of the movie"
