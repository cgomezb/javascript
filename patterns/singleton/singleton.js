const mySingleton = (function() {
  const instance;

  function init() {
    function privateMethod() {
      console.log('I am private');
    }

    const privateVariable = 'I am algo private';

    const privateRandomNumber = Math.random();

    return {
      publicMethod: function() {
        console.log('The public can see me!');
      },
      publicProperty: 'I am also public',
      getRandomNumber: function() {
        return privateRandomNumber;
      }
    }
  };

  return {
    getInstance: function() {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  };
});

const singleA = mySingleton.getInstance();
const singleB = mySingleton.getInstance();
console.log(singleA.getRandomNumber() === singleA.getRandomNumber());
// Outputs: true
