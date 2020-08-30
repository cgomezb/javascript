class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // Instance Method
  draw() {}

  // Static Method
  static parce(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const circle = Circle.parce('{ "radius": 1 }');
console.log(circle);

// Example Math

class Math2 {
  static abs(value) {
    // ...
  }
}

Math2.abs(1);
