'use strict';

class Footer {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.elements = null;
  }
  generate() {
    const date = new Date();
    this.elements = `<p>Copyright © ${date.getFullYear()} Trivial Hack. All rights reserved.</p>`;
    this.render();
  }
  render() {
    this.parentElement.innerHTML = this.elements;
  }
}
