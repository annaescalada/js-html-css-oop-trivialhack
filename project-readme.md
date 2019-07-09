# Snake

## Description
Trivial game.
## MVP (DOM - CANVAS)

Snake that moves through the canvas and eats apples to increase score.

Game is over if snake collapses on itself.


## Backlog

- When score reaches a certain number, level increases and snake moves faster.

- When snake eats food, grows.

- The player introduces name and a ranking is shown on game over screen.

## Data structure

Game

  Classes:
    this.snake
    this.food
    this.newFood
    this.isGameOver
    this.onGameOver
    this.canvas
    this.ctx
    this.totalScore;
    this.level
    this.backgroundMusic
    this.eatSound
    this.gameOverSound

  Methods:
    this.prototype.startGame()
    this.prototype.update()
    this.prototype.clear()
    this.prototype.draw()
    this.prototype.findFood()
    this.prototype.levelUp()
    this.prototype.checkCollisions()
    this.prototype.gameOverCallback()
    this.prototype.randomize();
    this.prototype.checkInSnake();
    this.prototype.styleCanvas();
    prototype.setSpeed();
    this.ranking();

Snake

  Classes:
    this.canvas
    this.ctx
    this.size
    this.positions
    this.direction
    this.isClicked
    this.color

  Methods:
    this.prototype.mode()
    this.prototype.draw()
    this.prototype.setDirection()
    this.prototype.setClicked()

Food

  Classes:
    this.canvas
    this.ctx
    this.size
    this.x
    this.y
    this.color
    this.appleIcon

  Methods:
    this.prototype.draw()


## States y States Transitions
Definition of the different states and their transition:

- splashScreen: consists on the first screen of the game and has a button to start the game.
- gameScreen: is the gameplay screen with the canvas.
- gameoverScreen: is shown when the player runs the snake on itself, shows total score and level reached and has a button to restart the game.


## Task

Create folder and files locally.

Setup git and remote repository.

Create main.js and transition screens.

Create game.js and game loop.

Create Snake.js.

Create Food.js.

Work on the game over condition with a new method checkCollision in game.

Backlog:

  Make snake grow when eats an apple.

  Increase level depending on score and increase speed.

Edit CSS stylesheet to make the game more user friendly.

## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com)