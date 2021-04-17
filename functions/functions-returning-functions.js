const greet = function(greeting) {
  return function(name) {
    console.log(`${greeting} ${name}`);
  }
};

const greeterHey = greet('Hey');
greeterHey('John');

greet('Hello')('Jonas');

// Using arrow functions
const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('Hello')('Smith');
