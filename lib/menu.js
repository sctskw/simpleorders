function Menu() {
  this.menuItems = [];
}

Menu.prototype.listItems = function(category) {
  console.log(category);
};


module.exports = Menu;
