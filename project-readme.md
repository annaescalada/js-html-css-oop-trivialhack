# Trivial Hack

## Description
Trivial Hack is inspired in the famous Trivial Game but this time with true or false computer science questions.
## MVP (DOM - CANVAS)

The player can generate random questions and has to guess if they are true or false.


## Backlog

- The player can change the difficulty of the question.

## Data structure

Components:

  Navbar
  this.parentElement
    this.links
    this.style
    this.render()
    this.generate()
    
  Footer
  this.parentElement
    this.style
    this.render()
    this.generate()

  Cards
    this.cardStyle
  this.movie
  this.generate()

  Loading
    this.parentElement
    this.style
    this.render()
    this.generate()

Pages:

  LandingPage
    this.parentElement
    this.title
    this.subtitle
    this.style
    this.render()
    this.generate()

  TrivialPage
    this.parentElement
    this.title
    this.movies
    this.style
    this.render()
    this.generate()
    this.getMovies()
    this.callSWService()

Services:

  Service
    this.baseUrl
    this.getAllMovies()

Layout
	this.root
	this.style
	this.render()
	this.generate()
	this.getContainers()

Router
	this.url
	this.generatePage()

App


## States y States Transitions
Definition of the different states and their transition:

- Landing Page: consists on the first screen of the website and has a button to start the game.
- Trivial Page: consists on the difficulty selector and the button to generate questions.

## Task

Create folder and files locally.

Setup git and remote repository.

Create components.

Create pages.

Create layout, router and services.

Create app.

Apply styles.

Backlog:
  Change difficulty of the question.


## Links


### Trello
[Link url](https://trello.com)


### Git
URls for the project repo and deploy
[Link Repo](https://github.com/annaescalada/trivial-web)
[Link Deploy](https://annaescalada.github.io/trivial-web/#0)


### Slides
URls for the project presentation (slides)
[Link Slides.com](https://docs.google.com/presentation/d/1TJ2onuva3uXLwXxRwbx3L3rYtGlsHyOlUwNxSZepGqg/edit?usp=sharing)
