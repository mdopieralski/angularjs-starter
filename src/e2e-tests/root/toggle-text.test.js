'use strict';

var RootPage = require('./root.page.js');

describe('toggle text', () => {

  var page = new RootPage();
  var headers = ['Hello, I\'m root component.', 'I can do cool things, mate.'];

  beforeEach(() => {

    browser.get('/');
  });

  describe('onload', () => {

    it('header should display certain text', () => {

      var header = element(By.css('h1'));

      expect(header.getText()).toEqual(headers[0]);
    });
  });

  describe('after first click', () => {

    it('header should display certain text', () => {

      page.toggleText();

      var text = element(By.css('h1')).getText();

      expect(text).toEqual(headers[1]);
    });
  });
});
