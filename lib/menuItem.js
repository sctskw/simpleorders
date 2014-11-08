var util = require('util');
var _ = require('lodash');

function MenuItem(cfg) {
  this.price = cfg.price || 0;
  this.name = cfg.name;
  this.type = cfg.type;
  this.categories = [];

  if(!this.type) {
    throw new Error('Invalid MenuItem Type');
  }
}


function getDisplayPrice() {
  return util.format('${0}', this.price);

}

MenuItem.prototype.getDisplayPrice = getDisplayPrice;

module.exports = MenuItem;
