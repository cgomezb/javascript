const oneWord = function(str) {
  return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function(str) {
  const [first, ...others] = str.split('');
  return [first.toUpperCase(), ...others].join(' ');
}

const transformer = function(str, fn) {
  console.log(`Original string ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by ${fn.name}`);
}

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);

// Example
const high5 = function() {
  console.log('Hi!');
}

// addEventListener is the higher order function
// high5 is the callback function
document.body.addEventListener('click', high5);

// Other example
const iterate = function(item) {
  console.log(item);
}

// const iterate = (item) => console.log(item);

const array = ['1', '2', '3'];
array.forEach(iterate);