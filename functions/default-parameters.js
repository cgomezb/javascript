function interest(principal, rate, years) {
  rate = rate || 3.5;
  years = years || 5;

  return principal * rate / 100 * years;
}

console.log(interest(10000, 3.5, 5));
console.log(interest(10000));

function calculateInterest(principal, rate = 3.5, years = 5) {
  return principal * rate / 100 * years;
}

console.log(calculateInterest(10000));

// Other example

const bookings = [];

const createBooking = function (flightNumber, numPassengers = 1, price = 199 * numPassengers) {
  const booking = {
    flightNumber,
    numPassengers,
    price
  };

  bookings.push(booking);
};

createBooking('FLI123');
createBooking('FLI123', 2);
createBooking('FLI123', 3, 200);
// How to skip parameter
createBooking('FLI123', undefined, 250);
