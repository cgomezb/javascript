const person = {
  name: 'Cesar',
  enable: true,
  walk: function() {
    console.log('walk');
  }
};

// /* Manually way */
let another = {};
for (let key in person) {
  another[key] = person[key];
}

console.log(another);

/* Using Object Constructor */
const another = Object.assign({}, person);
console.log(another);

// /* Using Spread Operator */
const another = {...person};
console.log(another);
