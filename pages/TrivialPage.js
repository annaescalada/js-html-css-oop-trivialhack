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
      <h3>Choose the difficulty, click generate question and guess if the answer is true or false</h2>
    </header>
    <section class="difficulty-container">
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
      <h3>Easy, medium or hard?</h3>
      <div id="difficulty-div">
        <button id="easy"><img id="easy" src="styles/images/triangulito.png" width="15px"></button>
        <button id="medium"><img id="medium" src="styles/images/triangulito.png" width="15px"><img id="medium" class="upside-down" src="styles/images/triangulito.png" width="15px"></button>
        <button id="hard"><img id="hard" src="styles/images/triangulito.png" width="15px"><img id="hard" class="upside-down" src="styles/images/triangulito.png" width="15px"><img id="hard"src="styles/images/triangulito.png" width="15px"></button>
      </div>
      <div id="difficulty-bar-container"><div id="difficulty-bar"></div></div>
      <button id="question-button">Generate question</button>
    </section>
    <section id="question-answer-container">
      <div id="question-answer"></div>
    </section>
    `;
    this.render();
    var self = this;
    var difficultyButtons = document.querySelectorAll('#difficulty-div button');

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
  this.subParentElement = document.querySelector('#question-answer');
  this.loading = new Loading(this.subParentElement);
  this.loading.generate();
} 

TrivialPage.prototype.connectToAPI = async function(self) {
  self.loadingSection();
  self.data = await trivialServiceInstance.getQuestion(self.difficulty);
  self.question = self.data.results[0].question;
  self.category = self.data.results[0].category;
  setTimeout(() => {
    self.generateQuestionAnswer();
  }, 3000);
} 

TrivialPage.prototype.generateQuestionAnswer = async function() {
  var questionElement = `
  <p>${this.question}</p>
  <div id="true-false-buttons">
    <button class="button-true">True</button>
    <button class="button-false">False</button>
  </div>
  `;
  this.subParentElement.innerHTML = questionElement;
  var trueFalseButtons = document.querySelectorAll('#true-false-buttons button');
  var self = this;
  trueFalseButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      this.generateAnswer(event,self);
    });
  });
}

TrivialPage.prototype.generateAnswer = function (event,self) {
  if (event.target.textContent === self.data.results[0].correct_answer) {
    var answerElement = `<p class="correct">Your answer is <em>correct</em>!!!</p>`;
  } else {
    var answerElement = `<p class="incorrect">Your answer is <em>incorrect</em>. You are not a true Trivial Hacker.</p>`;
  }
  this.subParentElement.innerHTML = answerElement;
}



TrivialPage.prototype.changeDifficulty = function (event, self) {
  self.difficulty = event.target.id;
  console.log(event);
  var difficultyBar = document.querySelector('#difficulty-bar');
  switch (self.difficulty) {
    case 'easy': {
      difficultyBar.classList.add('easy-level');
      difficultyBar.classList.remove('medium-level');
      difficultyBar.classList.remove('hard-level');
      break;
    }
    case 'medium': {
      difficultyBar.classList.add('medium-level');
      difficultyBar.classList.remove('easy-level');
      difficultyBar.classList.remove('hard-level');
      break;
    }
    case 'hard': {
      difficultyBar.classList.add('hard-level');
      difficultyBar.classList.remove('medium-level');
      difficultyBar.classList.remove('easy-level');
      break;
    }
  }
}