import { startGame, resetGame, throwAction } from './utils.js';

const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');
const throwButton = document.getElementById('throw-button');


startButton.addEventListener('click', () => {startGame();});

resetButton.addEventListener('click', () => {resetGame();});

throwButton.addEventListener('click', () => {throwAction();});