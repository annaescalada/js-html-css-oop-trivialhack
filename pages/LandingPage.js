'use strict';

function LandingPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;

}

LandingPage.prototype.generate = function() {
  this.elements = `
    <header class="landing">
      <ul class="circles">
              <li><img src="./styles/images/Logo.png" width="30px"></li>
              <li><img src="./styles/images/Logo.png" width="40px"></li>
              <li><img src="./styles/images/Logo.png" width="35px"></li>
              <li><img src="./styles/images/Logo.png" width="50px"></li>
              <li><img src="./styles/images/Logo.png" width="45px"></li>
              <li><img src="./styles/images/Logo.png" width="55px"></li>
              <li><img src="./styles/images/Logo.png" width="35px"></li>
              <li><img src="./styles/images/Logo.png" width="60px"></li>
              <li><img src="./styles/images/Logo.png" width="30px"></li>
              <li><img src="./styles/images/Logo.png" width="45px"></li>
      </ul>
      <h1 class="fade-in-fwd">Trivial Hack</h1>
      <h2 class="fade-in-fwd">So you think you know everything about computer science?</h2>
      <button id="landing-button" class="fade-in-fwd">Play</button>
    </header>
  `;
  this.render();
  var button = document.querySelector('#landing-button');
  var self = this;
  button.addEventListener('click',() => {
    this.changePage(self);
  });
}

LandingPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

LandingPage.prototype.changePage = function(self) {
  routerInstance.buildDOM('/trivial', self.parentElement);
}
