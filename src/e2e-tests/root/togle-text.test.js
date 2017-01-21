'use strict';

var RootPage = require('./root.page.js');

describe('toggle text', function() {

  var page = new RootPage();
  var headers = ['Hello, I\'m root component.', 'I can do cool things, mate.'];

  beforeEach(function() {
    browser.get('/');
  });

  describe('onload', function() {

    it('header should display certain text', function() {

      expect(element(By.css('h1')).getText()).toEqual(headers[0]);
    });

  });
  describe('after first click', function() {

    it('header should display certain text', function() {

      page.toggleText();
      expect(element(By.css('h1')).getText()).toEqual(headers[1]);
    });
  });
});
