// String

const airLine = 'TAP Air Portugal';
const plane = 'A320';

// Get a specific character by position (like an array)
console.log(plane[0]);  // A
console.log(plane[1]);  // 3
console.log(plane[2]);  // 2
console.log('B737'[0]);  // B

// size
console.log(airline.length);  // 16
console.log('B737'.length);   // 2

// Methods

// Index of
console.log(airline.indexOf('r'));  // 6
console.log(airline.indexOf('Portugal'));  // 8
console.log(airline.indexOf('portugal'));  // -1

// Last index of
console.log(airline.lastIndexOf('r'));  // 10

// slice
// start
console.log(airLine.slice(4));  // Air Portugal

// start and end
console.log(airLine.slice(4, 7));  // Air

// first word
console.log(airline.slice(0, airLine.indexOf(' ')));

// last word
console.log(airline.slice(airLine.lastIndexOf(' ') + 1));

// last 2 characteres
console.log(airline.slice(-2))

// first character
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got a middle seat');
  } else {
    console.log('You got lucky');
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// Lower case
console.log(airLine.toLowerCase());

// Upper case
console.log(airLine.toUpperCase());

// Example: Capitalization in name
const capitalize = function(name) {
  if (!name) {
    return;
  }

  const nameLowerCase = name.toLowerCase();
  return nameLowerCase[0].toUpperCase() + nameLowerCase.slice(1);
}

// comparing email
const comparing = function(email, loginEmail) {
  const normalizedEmail = loginEmail.toLowerCase().trim();
  return email === normalizedEmail;
}

const email = 'hello@jack.io';
const loginEmail = '    Hello@Jack.iO   \n';

const c = comparing(email, loginEmail);

// Replacing
const convert = function(currency) {
  return currency.replace('€', '$').replace(',', '.');
}

const priceUS = convert('288,97€');
console.log(priceUS);

// Replace just one ocurrence
const announcement = 'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));

// Replace all ocurrences
console.log(announcement.replace(/door/g, 'gate'));

// Booleans
const newPlane = 'Airbus A320neo';
console.log(newPlane.includes('A320'));
console.log(newPlane.includes('Boeing'));
console.log(newPlane.startsWith('Airb'));
console.log(newPlane.endsWith('neo'));

// Split and join
const nameStr = 'John Smith';
const [firstName, lastName] = nameStr.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name) {
  const names = name.split(' ');
  const nameUpper = [];

  for (const n of names) {
    nameUpper.push(n[0].toUpperCase() + n.slice(1));
  }

  return nameUpper.join(' ');
}

capitalizeName('john smith');
capitalizeName('jessica davis');

// Padding
const message = 'Go to gate 23!';
const messagePadding = message.padStart(20, '+').padEnd(30, '+');
console.log(messagePadding);

const maskCreditCard = function(number) {
  const str = String(number);
  const last =  str.slice(-4);
  return last.padStart(str.length, '*');
}

maskCreditCard(123456789);

// Repeat
const messageToDisplay = 'Bad weather... all departues delayed \n';
console.log(messageToDisplay.repeat(5));
