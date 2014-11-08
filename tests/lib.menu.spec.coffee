should = require 'should'
Menu = require '../lib/menu'

describe 'Menu', ->
  before ->
    @Menu = new Menu()
    return

  describe 'when it is initialized', ->
    it 'should have empty items', ->
      @Menu.menuItems.should.be.type('object')
      @Menu.menuItems.length.should.equal(0)
