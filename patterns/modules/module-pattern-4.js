const basketModule = (function () {
  const basket = [];

  function addItem(value) {
    basket.push(value);
  }

  function getItemCount() {
    return basket.length;
  }

  function getTotal() {
    let itemCount = this.getItemCount();
    let totalPrice = 0;

    while (itemCount--) {
      totalPrice += basket[itemCount].price;
    }

    return totalPrice;
  }

  return { addItem, getItemCount, getTotal };
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
