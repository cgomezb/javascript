function Circle(radius) {
  this.radius = radius;

  this.move = function() {
    console.log('move');
  }
}

Circle.prototype.draw = function() {
  console.log('draw');
}

const c1 = new Circle(1);

// Returns instance members
console.log(Object.keys(c1));

// Returns all members (instance and prototype)
for (let key in c1) {
  console.log(key);
}

// has own property
c1.hasOwnProperty('radius'); // true
c1.hasOwnProperty('draw'); // false
