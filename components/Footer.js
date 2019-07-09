'use strict';

function Footer(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

Footer.prototype.generate = function(){
  this.elements = `<p>Nice footer</p>`;
  this.render();
}

Footer.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}