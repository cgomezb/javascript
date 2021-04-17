// Closure

// Example 1
const secureBooking = function() {
  let passengerCount = 0;

  return function() {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const broker = secureBooking();
broker(); // 1 passengers
broker(); // 2 passengers
broker(); // 3 passengers


// Example 2

let f;

const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  };
};

const h = function() {
  const b = 23;
  f = function() {
    console.log(b * 2);
  };
};


g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);


// Example 3
const boardPassengers = function(n, wait) {
  const perGroup = n / 3;
  
  setTimeout(function() {
    console.log(`We are now boarding all ${n}`);
    console.log(`There are 3 groups, each with ${perGroup} passenger`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);


// Challenge

(function() {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function() {
    header.style.color = 'blue';
  });
})();