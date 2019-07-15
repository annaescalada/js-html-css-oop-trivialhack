'use strict';

class TrivialService {
  constructor (){
    this.baseUrl = `https://opentdb.com/api.php`;
  }
  async getQuestion(difficulty) {
    const result = await fetch(`${this.baseUrl}?amount=1&category=18&difficulty=${difficulty}&type=boolean`);
    const data = await result.json();
    return data;
  }
}

const trivialServiceInstance = new TrivialService();