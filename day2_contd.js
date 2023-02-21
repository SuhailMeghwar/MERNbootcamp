const prompt = require('prompt-sync')();

let num_1 = prompt('Enter the first number: ');
let op = prompt('Enter the operator: ');
let num_2 = prompt('Enter the second number: ');

if ((op == '+') || (num_1>0)){
console.log(Number(num_1) + Number(num_2));
}

if (op == '-'){
    console.log(Number(num_1) - Number(num_2));
}

if (op == '*'){
    console.log(Number(num_1) * Number(num_2));
}

if (op == '/'){
    console.log(Number(num_1) / Number(num_2));
}
else {
    console.log('invalid operator');
}