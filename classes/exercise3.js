const car = new function() {
  this.model = '';
  this.color = 'silver';
  this.year = '2012';

  this.getInfo = function() {
    return this.model + ' ' + this.year; 
  };
}

car.model = 'ford';
console.log(car.getInfo());
