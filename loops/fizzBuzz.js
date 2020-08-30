// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number'

function fizzBuzz(input) {
  if (typeof input !== 'number') {
    return 'Not a number';
  }

  let output = '';
  if (input % 3 === 0) {
    output = 'Fizz';
  }

  if (input % 5 === 0) {
    output += 'Buzz';
  }

  return output ? output : input;
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(15));
console.log(fizzBuzz(17));
console.log(fizzBuzz(''));
console.log(fizzBuzz('string'));
console.log(fizzBuzz(true));
