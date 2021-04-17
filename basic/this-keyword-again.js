'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flighNum, name) {
    console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flighNum}`);
    this.bookings.push({ flight: `${this.iataCode}${flighNum}`, name });
  }
};

lufthansa.book(239, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: []
};

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: []
};

const book = lufthansa.book;

// Does not work
// book(23, 'Sara Davis');

// Using call function
book.call(eurowings, 23, 'Sara Davis');
console.log(eurowings);

book.call(lufthansa, 39, 'John Smith');
console.log(lufthansa);

book.call(swiss, 47, 'Ann Adams');
console.log(swiss);

// Using apply function
const flightData = [59, 'George Lee']
book.apply(eurowings, flightData);
console.log(eurowings);

// Better way
book.call(eurowings, ...flightData);
console.log(eurowings);

// Bind method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(62, 'William Steven');
// bookLH(62, 'William Steven');
// bookLX(62, 'William Steven');

// Also we can do...
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jackson');

// With event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);
  planes++;
  console.log(this.planes);
};

document.querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Challenge

const addTaxRate = function (rate) {
  return function(value) {
    return value + value * rate;
  }
}

const addTaxRate = rate => value => value + value * rate;

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// Coding Challenge

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: Javascript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const message = `${poll.question}\n${poll.options.join('\n')}\n(Write option number)`;
    const answer = Number(prompt(message));
    
    typeof answer === 'number'
      && answer < this.answers.length
      && this.answers[answer]++;
    
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  }
};

poll.registerNewAnswer();

poll.displayResults.call({ answer: [1, 2, 3] });
poll.displayResults.call({ answer: [1, 2, 3] }, 'string');

poll.displayResults.call({ answer: [5, 6, 7, 8, 9, 10] });
poll.displayResults.call({ answer: [5, 6, 7, 8, 9, 10] }, 'string');
