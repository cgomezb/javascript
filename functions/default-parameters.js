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
