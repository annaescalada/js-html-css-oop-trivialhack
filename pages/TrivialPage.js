'use strict';

class TrivialPage {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.subParentElement = null;
    this.elements = null;
    this.data = null;
    this.difficulty = 'easy';
    this.loading = null;
    this.question = null;
    this.category = null;
  }

  async generate() {
    this.elements = `
      <header class="trivial">
        <h2 class="fade-in-fwd">Welcome to Trivial Hack game</h2>
        <h3 class="fade-in-fwd">Choose the difficulty, click generate question and guess if the answer is true or false</h2>
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
        <div id="question-answer"><p class="introduction">Click the <em>generate question</em> button above to start your Trivial Hack.</p></div>
      </section>
      `;
      this.render();
      const self = this;
      const difficultyButtons = document.querySelectorAll('#difficulty-div button');
      difficultyButtons.forEach((button) =>{
        button.addEventListener('click', (event) => {
          this.changeDifficulty(event, self)});
      })
      const questionButton = document.querySelector('#question-button');
      questionButton.addEventListener('click',() => {
        this.connectToAPI(self);
      });
  }
  render() {
    this.parentElement.innerHTML = this.elements;

  }  
  loadingSection() {
    this.subParentElement = document.querySelector('#question-answer');
    this.loading = new Loading(this.subParentElement);
    this.loading.generate();
  }
  connectToAPI() {
    self.loadingSection();
    self.data = await trivialServiceInstance.getQuestion(self.difficulty);
    self.question = self.data.results[0].question;
    self.category = self.data.results[0].category;
    setTimeout(() => {
      self.generateQuestionAnswer();
    }, 3000);
  }
  async generateQuestionAnswer() {
    const questionElement = `
    <p>${this.question}</p>
    <div id="true-false-buttons">
      <button class="button-true">True</button>
      <button class="button-false">False</button>
    </div>
    `;
    this.subParentElement.innerHTML = questionElement;
    const trueFalseButtons = document.querySelectorAll('#true-false-buttons button');
    const self = this;
    trueFalseButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        this.generateAnswer(event,self);
      });
    });
  }
  generateAnswer(event,self) {
    if (event.target.textContent === self.data.results[0].correct_answer) {
      const answerElement = `<p class="correct">Your answer is <em>correct</em>!!! Welcome to the family, Trivial Hacker.</p>`;
    } else {
      const answerElement = `<p class="incorrect">Your answer is <em>incorrect</em>. You are not a true Trivial Hacker.</p>`;
    }
    this.subParentElement.innerHTML = answerElement;
  }
  changeDifficulty(event,self) {
    self.difficulty = event.target.id;
    const difficultyBar = document.querySelector('#difficulty-bar');
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
}

