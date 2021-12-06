---
title: 'Phrase Hunter'
subline: "Object Oriented Programming"
excerpt: "This is a 'hangman' style phrase guessing game. The objective is to guess the phrase."
order: 7
type: 'Front-End'
technologies: ['Javascript Classes', 'JS Object Methods', 'Callback Functions']
secondaryTechnologies: []
githubURL: "https://github.com/raleigh9123/Word-Game-App"
demoURL: "https://raleigh9123.github.io/Word-Game-App/"
projectCompleted:
  isComplete: true
  completionDate: 'April, 2019'
coverImage: '/phrase-hunter-cover.png'
---
# Description
This app creates a phrase guessing game in your browser. The objective of the game is to guess a phrase by typing letters on your keyboard or clicking letters on screen. After five missed attempts, the user loses and must generate a new game. If the phrase is guessed, the user is returned to the main screen and may start a new game. End game screen displays a win or loss message.

## Technical Process
The project is composed of two classes: Game and Phrase.
-App.js instantiates a new Game object (and adds event listeners for a new initialization of class Game)
-Game object then instantiates a new Phrase object. The instantiated object calls methods from both classes to process and match key presses or button clicks to compare letters with the phrase.
-The Game object tracks missed guesses and when the user runs out of attempts the Game class calls an endGame method, resetting the game, and returning the user to the main screen with a customized message ( win/lose ).
