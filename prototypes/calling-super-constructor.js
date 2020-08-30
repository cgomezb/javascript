function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

function Circle(radius, color) {
  // Call super constructor
  Shape.call(this, color);
  this.radius = radius;
}

// Implicit relationship
// Circle.prototype = Object.create(Object.prototype);
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('draw');
}

const s = new Shape();
const c = new Circle(1, 'red');
