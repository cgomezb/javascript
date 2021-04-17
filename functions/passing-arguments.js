const flight = 'FLI123';
const passenger = {
  name: 'John',
  passport: 123456789
}

const checkIn = function(flightNum, passenger) {
  flightNum = 'LH123';
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 123456789) {
    console.log('Checked in!');
  } else {
    console.log('Wrong passport!');
  }
}

checkIn(flight, passenger);
console.log(flight); // FLI123
console.log(passenger); // Mr. John
