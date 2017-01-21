'use strict';

describe('component: rootComponent', () => {

  var $componentController;

  beforeEach(module('angularMdStarterApp'));

  beforeEach(inject(_$componentController_ => {

    $componentController = _$componentController_;
  }));

  describe('binding', () => {

    it('initial header value', () => {

      var controller = $componentController('rootComponent');

      expect(controller.header).toBe('Hello, I\'m root component.');
    });

    it('initial header value should change', () => {

      var controller = $componentController('rootComponent');

      controller.toggleHeaderText();

      expect(controller.header).toBe('I can do cool things, mate.');
    });
  });
});
