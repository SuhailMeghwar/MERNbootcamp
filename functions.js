/**
 * Functions - My Personal Favourites :))
 * we need to perform a similar action in many places
 * allow the code to be called many times without repetition
 * blocks of code that can be reused throughout your program
 * 
 * What functions we have seen till now?
 * How do variables behave in functions? - variable shadowing
 * defualt values
 */

console.log("you have logged out!!");
console.log("you have logged out!!");
console.log("you have logged out!!");

// function declaration 
function greeting()
{
  console.log("Greetings of day")
  let result = 0.2 + 0.1
  return result
}

let result1 = greeting(); // "Greetings of day"

function logout (email, password = "abd"){
  if (email = 'abd') {
    console.log("loged out")
  }
  password += 'unknown'
}
let password = "abd"
logout("email@email.com", undefined)
console.log(password)


// scopes 

let user_detail = "dsfdsf";
function time_saving_function(user_data){
  let name = "my name";
  console.log(user_detail); // globally declared
  console.log(user_data);  // passed by parameters

  user_data += '1'
  console.log("you have logged out!!");
  return user_data
}


// fucntion call -- parameters
let my_function_worked = time_saving_function(user_detail);
user_detail += '1'

function name(parameter1, parameter2, ... parameterN) {
    // body
   }

// let's write a sum function
 let sum = ''  // variable shadowing
function calculateSum(num1, num2){
  if (num2 == undefiened ) {
    num2 = 434
    return;
  }
  let sum = num1+ num2
  return {sum, num1,num2}; 
}
 sum = calculateSum(1,2);
 sum['num1']
 sum.num1

 let result = {'sum1': 3432,
                'num1': 32432,
                 'num2': 3234};

// destructuring
login()
function login ({name, emial, pet_name}){
  email = "dfda@dfd.com"
  password = "fdsfds"
}
let obj = {emial, name, pet_ka_name}

login(onj)

login(name, email, pet_name)

console.log(typeof login) // function


// hmm .. can we make variables out of functions ???
func_expression() // error 
let func_expression = function() {
  console.log("i am function expression 1")
  return 1;
}
let result12 = fuc_expression()

// hoisting, anonymus, iife (Immediately invoked function expression)
// use function expressions to limit where the function is available,

function b() {
  let b = 1+1
}

function main() {
  let a = 0.1+0.3;
  let result = b()
  return b
}
setTimeout(a, 5000);

// Rest Parameters

function unlimited_paramteres(...data) {
  let var1 = data[0]
}
unlimited_paramteres(1,2,3,4,5,6,7,8,8,8,9,9,9,9,09)


// RULES
/**
 * Function are actions.
 * One function – one action
 * 
 * "get…" – return a value,
 * "calc…" – calculate something,
 * "create…" – create something,
 * "check…" – check something and return a boolean, etc.
 */

// Hmm .. Lets write a power function -> pow(3, 3)
pow(3,3)
function calculatePow(base, exponent){
  return base*exponent; 
}

// form validator, array library


// callbacks
// pass a function and expect it to be “called back” 

function ask(question, yes, no) {
  //ijjoijoi
    if (1>2) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);

  // can you above code using our previous knowledge?
  ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
  );

