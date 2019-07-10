'use strict';

function TrivialPage(parentElement) {
  this.parentElement = parentElement;
  this.subParentElement = null;
  this.elements = null;
  this.data = null;
  this.difficulty = 'easy';
  this.loading = null;
  this.question = null;
  this.category = null;
}

TrivialPage.prototype.generate = async function() {
  this.elements = `
    <header class="trivial">
      <h2>Welcome to Trivial Hack game</h2>
      <h3>Choose easy, medium or hard, click generate question and guess if the answer is true or false</h2>
    </header>
    <section class="difficulty-container">
      <h3>Chose difficulty</h3>
    <div>
      <button class="easy"><img src="styles/images/triangulito.png" width="20px"></button>
      <button class="medium"><img src="styles/images/triangulito.png" width="20px"><img class="upside-down" src="styles/images/triangulito.png" width="20px"></button>
      <button class="hard"><img src="styles/images/triangulito.png" width="20px"><img class="upside-down" src="styles/images/triangulito.png" width="20px"><img src="styles/images/triangulito.png" width="20px"></button>
    </div>
    </section>
    <section class="generate-question">
      <button id="question-button">Generate question</button>
    <section class="question-answer">
    </section>
    `;
    this.render();
    var self = this;
    var difficultyButtons = document.querySelectorAll('div button');

    difficultyButtons.forEach((button) =>{
      button.addEventListener('click', (event) => {
        this.changeDifficulty(event, self)});
    })
    var questionButton = document.querySelector('#question-button');
    questionButton.addEventListener('click',() => {
      this.connectToAPI(self);
    });
}

TrivialPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

TrivialPage.prototype.loadingSection = function() {
  this.subParentElement = document.querySelector('.question-answer');
  this.loading = new Loading(this.subParentElement);
  this.loading.generate();
} 

TrivialPage.prototype.connectToAPI = async function(self) {
  self.loadingSection();
  self.data = await trivialServiceInstance.getQuestion(self.difficulty);
  self.question = self.data.results[0].question;
  self.category = self.data.results[0].category;
  self.generateQuestionAnswer();
} 

TrivialPage.prototype.generateQuestionAnswer = async function() {
  var questionElement = `
  <p>${this.question}</p>
  <p>${this.category}</p>
  <button class="button-true">True</button>
  <button class="button-false">False</button>
  `;
  this.subParentElement.innerHTML = questionElement;
  var trueFalseButtons = document.querySelectorAll('.question-answer button');
  var self = this;
  trueFalseButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      this.generateAnswer(event,self);
    });
  });
}

TrivialPage.prototype.generateAnswer = function (event,self) {
  if (event.target.textContent === self.data.results[0].correct_answer) {
    var answerElement = `<p class="correct">Your answer is correct!</p>`;
  } else {
    var answerElement = `<p class="incorrect">Your answer is incorrect!</p>`;
  }
  this.subParentElement.innerHTML = answerElement;
}



TrivialPage.prototype.changeDifficulty = function (event, self) {
  self.difficulty = event.target.className;
}