function Car(model, color, year) {
  this.model = model;
  this.color = color;
  this.year = year;

  this.getInfo = function() {
    return this.model + ' ' + this.color + ' ' + this.year; 
  };
}

const myCar = new Car('ford', 'silver', '2012');
console.log(myCar.getInfo());
// Outputs: myCar { model: 'ford', color: 'silver', year: '2012' }

// Using Prototype
function Car(model, color, year) {
  this.model = model;
  this.color = color;
  this.year = year;
}

Car.prototype.toString = function() {
  return this.model + ' ' + this.color + ' ' + this.year;
};

const civic = new Car('ford', 'silver', '2012');
const luxury = new Car('bmw', 'white', '2020');

console.log(civic.toString());
console.log(luxury.toString());