const prompt = require('prompt-sync')();

const choices = ["scissors", "rock", "paper"];

const userInput = prompt("Lets Play. Enter your choice: ");

let computerChoice = choices[Math.floor(Math.random()*3)];

console.log(`I chose ${computerChoice}`);
