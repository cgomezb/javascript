const person = {
  name: 'Cesar',
  lastName: 'Gomez'
};

for (let key in person) {
  console.log(key, person[key]);
}

const colors = ['yellow', 'blue', 'red'];

for (let index in colors) {
  console.log(index, colors[index]);
}
