function Shape() {
}

Shape.prototype.duplicate = function() {
  console.log('duplicate');
}

function Circle(radius) {
  this.radius = radius;
}

// Implicit relationship
// Circle.prototype = Object.create(Object.prototype);
Circle.prototype = Object.create(Shape.prototype);

Circle.prototype.draw = function() {
  console.log('draw');
}

const s = new Shape();
const c = new Circle(1);
