'use strict';

function Footer(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
}

Footer.prototype.generate = function(){
  var date = new Date();
  this.elements = `<p>Copyright © ${date.getFullYear()} Anna Escalada. All rights reserved.</p>`;
  this.render();
}

Footer.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}