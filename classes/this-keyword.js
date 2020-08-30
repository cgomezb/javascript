'use strict'

const Circle = function() {
  this.draw = function() {
    console.log(this);
  }
};

const c = new Circle();
// Method Call
c.draw(); // Circle Object

const draw = c.draw;
// Function Call
draw(); // Windows (Global Object)

// With 'use strict' we will get undefined instead of Global Object
 
/* */

// The body of the classes are executed in the strict mode
class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();
const draw = c.draw;
draw();

// We get undefined
