// Modifing an object without changing the original object

const person = {
  name: 'John',
  lastName: 'Smith',
  address: {
    city: 'New York',
    country: 'USA'
  }
}

// Copy object
const updated = Object.assign({}, person);
console.log(updated);

// Another way
const updated = {...person};
console.log(updated);

// We need to be aware with the nested properties on an object
const updated = {...person};
updated.address.city = 'Miami'; // It'll modify the original object
console.log(updated);

// Correct way to update address
const updated = {
  ...person,
  address: {
    ...person.address,
    city: 'Miami'
  }
};
console.log(person);
console.log(updated);
