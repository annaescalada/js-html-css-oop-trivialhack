'use strict';

class LandingPage{
  constructor (parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
  }
  generate() {
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
    const button = document.querySelector('#landing-button');
    button.addEventListener('click',() => {
      this.changePage(this);
    });
  }
  render() {
    this.parentElement.innerHTML = this.elements;
  }
  changePage() {
    routerInstance.buildDOM('/trivial', this.parentElement);
  }
}