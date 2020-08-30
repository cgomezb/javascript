const person = {
  name: 'Cesar',
  age: 30,
  address: {
    street: 10,
    block: 15
  },
  enable: true,
  walk: function() {
    console.log('walk');
  }
};

for (let key in person) {
  console.log(key, person[key]);
}

// TypeError: person is not iterable
// for (let key of person) {
//   console.log(key);
// }

for (let key of Object.keys(person)) {
  console.log(key);
}

for (let entry of Object.entries(person)) {
  console.log(entry);
}

let property = 'name';
if (property in person) {
  console.log('property is in person Object');
} else {
  console.log('property is not in person Object');
}
