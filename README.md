# Trivial Hack

**Trivial Hack** is inspired by the famous Trivial game but focuses on **true or false computer science questions**.

---

## 📜 Description
The player can generate random questions and must guess if they are **true** or **false**. Built with **DOM** and **Canvas** manipulation.

---

## 🚀 MVP
- Generate random questions.
- Player guesses if they are true or false.

---

## 📈 Backlog
- Change difficulty of the question.

---

## 🛠 Data Structure
### Components
- **Navbar** → `parentElement`, `links`, `style`, `render()`, `generate()`
- **Footer** → `parentElement`, `style`, `render()`, `generate()`
- **Cards** → `cardStyle`, `movie`, `generate()`
- **Loading** → `parentElement`, `style`, `render()`, `generate()`

### Pages
- **LandingPage** → `parentElement`, `title`, `subtitle`, `style`, `render()`, `generate()`
- **TrivialPage** → `parentElement`, `title`, `movies`, `style`, `render()`, `generate()`, `getMovies()`, `callSWService()`

### Services
- **Service** → `baseUrl`, `getAllMovies()`
- **Layout** → `root`, `style`, `render()`, `generate()`, `getContainers()`
- **Router** → `url`, `generatePage()`
- **App**

---

## 🔄 States & Transitions
- **Landing Page** → First screen with a button to start the game.
- **Trivial Page** → Difficulty selector + button to generate questions.
