function Cart(Order) {
  this.order = Order;
}

Cart.prototype.listItems = function listCartItems() {
  console.log(undefined);
}

module.exports = Cart;
