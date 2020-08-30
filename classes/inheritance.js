class Shape {
  constructor(color) {
    this.color = color;
  }

  move() {
    console.log('move');
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }

  draw() {
    console.log('draw');
  }
}

const c = new Circle('green', 1);
