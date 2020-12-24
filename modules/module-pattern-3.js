const basketModule = (function () {
  // Private
  const basket = [];

  function doSomethingPrivate () {
    // ...
  }

  function doSomethingElsePrivate () {
    // ...
  }

  return {
    addItem: function(value) {
      basket.push(value);
    },
    getItemCount: function() {
      return basket.length;
    },
    doSomething: doSomethingPrivate,
    getTotal: function () {
      let itemCount = this.getItemCount();
      let totalPrice = 0;

      while (itemCount--) {
        totalPrice += basket[itemCount].price;
      }

      return totalPrice;
    }
  };
})();

basketModule.addItem({
  item: 'bread',
  price: 100
});

basketModule.addItem({
  item: 'butter',
  price: 25
});

console.log(basketModule.getItemCount());
// Outputs: 2
console.log(basketModule.getTotal());
// Outputs: 125
console.log(basketModule.basket);
// Outputs: undefined
console.log(basket);
// Outputs: Uncaught ReferenceError: basket is not defined
