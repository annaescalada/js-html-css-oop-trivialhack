'use strict';

function TrivialPage(parentElement) {
  this.parentElement = parentElement;
  this.elements = null;
  this.data = null;
  this.difficulty = 'easy';
  this.loading = null;
  this.question = null;
  this.category = null;
}

TrivialPage.prototype.generate = async function() {
  this.elements = `
    <header>
      <h2>Welcome to trivial game.</h2>
    </header>
    <section class="difficulty-container">
    <h3>Chose difficulty</3>
    <div>
    <button class="easy">Easy</button>
    <button class="medium">Medium</button>
    <button class="hard">Hard</button>
    </div>
    </section>
    <section class="generate-question">
    <button id="question-button">Generate question</button>
    <section class="question-answer">
    </section>
    `;
    this.render();
    debugger;
    var difficultyButtons = document.querySelectorAll('div button');
  difficultyButtons.forEach((button) =>{
    button.addEventListener('click', this.changeDifficulty);
  })

  var questionButton = document.querySelector('#question-button');
  var questionAnswerSection = document.querySelector('.question-answer');
  questionButton.addEventListener('click',this.connectToAPI);
}


//await this.connectToAPI();

// this.elements += `<p>${this.data.results[0].question}</p>
// <button class="button-true">True</button>
// <button class="button-false">False</button>
// </section>`
// this.render();

//add event listener to true y false para generar respuesta


TrivialPage.prototype.render = function() {
  this.parentElement.innerHTML = this.elements;
}

TrivialPage.prototype.connectToAPI = async function() {
  var questionAnswerSection = document.querySelector('.question-answer');
  this.loading = new Loading(questionAnswerSection);
  this.loading.generate();
  this.data = await trivialServiceInstance.getQuestion(this.difficulty);
  console.log(this.data);
  //this.question = data.
  //this.category = data.
  var questionElement = `
  <p>${this.question}</p>
  <p>${this.category}</p>
  <button class="button-true">True</button>
  <button class="button-false">False</button>
  `;
  questionAnswerSection.innerHTML() = questionElement;
}

TrivialPage.prototype.changeDifficulty = function (event) {
  this.difficulty = event.target.className;
}