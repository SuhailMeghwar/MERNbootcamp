// npm install prompt-sync

const prompt = require('prompt-sync')();

const name = prompt('What is your name?');
console.log(`Hey there ${name}`);

let num1 = prompt('Enter number 1');
let num2 = prompt('Enter number 2');

let sum;
sum = Number(num1) + Number(num2);
console.log(sum);

// if conditions

if (1 > 3) {
// some code
console.log("4 is greater");
}
else {
    console.log("4 is smaller than something")
}

if (1 == 3) {
    
}
