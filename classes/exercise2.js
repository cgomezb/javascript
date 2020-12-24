const car = {
  model: '', 
  color: 'silver',
  year: '2012',
  getInfo: function() {
    return this.model + ' ' + this.year; 
  }
}

car.model = 'ford';
console.log(car.getInfo());
