'use strict';

function Loading(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

Loading.prototype.generate = function(){
  this.elements = `<img class="loading" src="styles/images/Logo.png" alt="Logo">`
  this.render();
}

Loading.prototype.render = function(){
  this.parentElement.innerHTML = this.elements;
}