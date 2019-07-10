'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;

}

LandingPage.prototype.generate = function() {
  this.elements = `
    <header>
      <h1>Trivial Game</h1>
      <h2>So you think you know everything?</h2>
      <button id="landing-button">Play</button>
    </header>
  `;
  this.render();
  var button = document.querySelector('#landing-button');
  button.addEventListener('click',this.changePage);
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

LandingPage.prototype.changePage = function(evemt) {
  routerInstance.buildDOM('/trivial', this.parentElement);
}
