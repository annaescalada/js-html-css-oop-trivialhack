'use strict';

function TrivialService(difficulty, category) {
  this.difficulty = difficulty;
  this.baseUrl = `https://opentdb.com/api.php`;
}

TrivialService.prototype.getQuestion = async function() {
  var result = await fetch(`${this.baseUrl}?amount=1&difficulty=${this.difficulty}&type=boolean`);
  var data = await result.json();
  console.log(data);
  return data;
}

var trivialServiceInstance = new TrivialService();