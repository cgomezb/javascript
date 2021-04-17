// Inmediately invoked function expressions

(function() {
  console.log('This will never run again');
})();

// Arrow way
(() => console.log('This will never run again'))();
