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
    <div class="area" >
            <ul class="circles">
                    <li><img src="./styles/images/logo.png" width="80px"></li>
                    <li><img src="./styles/images/logo.png" width="40px"></li>
                    <li><img src="./styles/images/logo.png" width="35px"></li>
                    <li><img src="./styles/images/logo.png" width="60px"></li>
                    <li><img src="./styles/images/logo.png" width="75px"></li>
                    <li><img src="./styles/images/logo.png" width="100px"></li>
                    <li><img src="./styles/images/logo.png" width="90px"></li>
                    <li><img src="./styles/images/logo.png" width="80px"></li>
                    <li><img src="./styles/images/logo.png" width="40px"></li>
                    <li><img src="./styles/images/logo.png" width="70px"></li>
            </ul>
    </div >
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
