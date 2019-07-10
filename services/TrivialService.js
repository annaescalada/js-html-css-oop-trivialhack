'use strict';

function TrivialService() {
  this.baseUrl = `https://opentdb.com/api.php`;
}

TrivialService.prototype.getQuestion = async function(difficulty) {
  var result = await fetch(`${this.baseUrl}?amount=1&category=18&difficulty=${difficulty}&type=boolean`);
  var data = await result.json();
  return data;
}

var trivialServiceInstance = new TrivialService();