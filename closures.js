/**
 * Closure : 
 * A closure is a function that remembers its outer variables and can access them. 
 * all functions are naturally closures
 * */
function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter = makeCounter();
  let counter1 = makeCounter();
  
  console.log( counter() ); // 0
  console.log( counter() ); // 1
  console.log( counter() ); // 2

  console.log(counter1())// 0
  console.log(counter1())// 1

  console.log(counter())// 3

  counter = null;


  // let counter2 = makeCounter();
  // console.log( counter2() ); // ?
  // console.log( counter2() ); // ?
