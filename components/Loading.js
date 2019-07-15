'use strict';

class Loading {
  constructor (parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
    }
    generate() {
      this.elements = `<img class="loading" src="styles/images/Logo.png" alt="Logo">`
      this.render();
    }
    render() {
      this.parentElement.innerHTML = this.elements;
    }
  }
  