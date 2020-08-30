function Circle(radius) {
  this.radius = radius;

  this.draw = function() {
    console.log('draw');
  }
}

const c1 = new Circle(1);
const c2 = new Circle(1);

/* Moving draw to prototype */
function Circle(radius) {
  // Instance members
  this.radius = radius;

  this.move = function() {
    this.draw();
    console.log('move');
  }
}

// Prototype members
Circle.prototype.draw = function() {
  this.move();
  console.log('draw');
}

Circle.prototype.toString = function() {
  return 'Circule with radius ' + this.radius;
}

const c1 = new Circle(1);
const c2 = new Circle(1);