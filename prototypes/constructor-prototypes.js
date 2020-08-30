/* Object */ 
let obj = { };
// obj.__proto__

Object.prototype

/* Array */
let array = [];
// array.__proto__

Array.prototype

/* Specific Funcion */
function Circle(radius) {
  this.radius = radius;
}

let circle = new Circle(5);
console.log(circle);
// Circule
  // __proto__
    // constructor
    // __proto__

Circle.prototype
// __proto__
  // constructor
  // __proto__
