should = require 'should'
Order = require '../lib/order'

describe 'Order', ->
  before ->
    @Order = new Order()
    return

  describe 'when it is initialized', ->
    it 'should have 0 order numbers', ->
      @Order.orderNo.should.equal(0)
    it 'should have empty order items', ->
      @Order.orderItems.should.be.type('object')
      @Order.orderItems.length.should.equal(0)
