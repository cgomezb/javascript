const myNamespace = (function () {
  let myPrivateVar, myPrivateMethod;

  myPrivateVar = 0;

  myPrivateMethod = function(text) {
    console.log(text);
  };

  return {
    myPublicVar = 'My Namespace',
    myPublicFunction: function(text) {
      myPrivateVar++;
      myPrivateMethod(text);
    }
  };
})();

console.log(myNamespace.myPublicVar);
console.log(myNamespace.myPublicFunction('Hello World'));
