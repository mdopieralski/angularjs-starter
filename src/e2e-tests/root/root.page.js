'use strict';

var RootPage = function() {};

RootPage.prototype.get = function() {
  browser.get('index.html');
};

RootPage.prototype.toggleText = function() {

  element(By.css('button')).click();
};

module.exports = RootPage;
