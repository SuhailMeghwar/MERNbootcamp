// lets write function in simpler way
(args) => expression

let power = (base, exponent) => base*exponent;
let shortened = base => base*base;

let func = (arg1, arg2, ..., argN) => expression;

let sum = (a, b) => a + b;

// If we have only one argument, then parentheses around parameters can be omitted
let double = n => n * 2;

// If there are no arguments, parentheses are empty
let simple_arrow = () => console.log("Arrow Function are FUN. Right? 😭😭");

//Multi Line arrow function
let do_something = (a,b) =>{
    return "something"
};
