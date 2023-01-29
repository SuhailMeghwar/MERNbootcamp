/**
 * Why use Switch?
 * 1. can replace multiple 'if' checks
 * 2. more descriptive way to compare a value with multiple variants/conditions.
 */
let condition_variable = "color 1";
switch (condition_variable) {
  case "color 1":
    // code
    break;
  case "color 2":
    // d code
    break;
  default:
    // i will run when nothing else runs
  
}

let a = 2 + 2;

switch (a) {
  case 4:
    console.log( 'Exactly!' );
  case 5:
    console.log( 'Too big' );
    break;
  case 3:
    console.log( 'Too small' );
    break;
  default:
    console.log( "I don't know such values" );
}

// take in a number from 1 to 7 and return the corresponding day of the week (e.g. 1 returns "Monday", 2 returns "Tuesday", etc.).
// a program that takes in your favorite color and prints out the corresponding message.
// a program that takes in a number grade and prints out the corresponding letter grade.