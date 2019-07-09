'use strict';

function Router() {
  this.page = null;
}

Router.prototype.buildDOM = function (url, parentElement) {
  switch (url) {
    case '/':
      this.generateLandingPage(parentElement);
      break;
    case '/trivial':
      this.generateTrivialPage(parentElement);
      break;
    default:
      this.generateLandingPage(parentElement);
      break;
  }
}

Router.prototype.generateLandingPage = function(parentElement) {
  this.page = new LandingPage(parentElement);
  this.page.generate();
}

Router.prototype.generateTrivialPage = function(parentElement) {
  this.page = new TrivialPage(parentElement);
  this.page.generate(); 
}

var routerInstance = new Router();

