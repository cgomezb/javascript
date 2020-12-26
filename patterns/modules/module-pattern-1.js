const testModule = (function () {
  let counter = 0;

  return {
    incrementCounter: function () {
      return counter++;
    },
    resetCounter: function () {
      console.log('Counter value prior to reset: ' + counter);
      counter = 0;
    }
  };
})();

testModule.incrementCounter();
testModule.incrementCounter();
testModule.resetCounter();
