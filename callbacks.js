// What are callbacks?
// A callback is a function that is passed as an argument to another function
// and is executed after the first function has finished executing. 

// Where are they needed?
// write asynchronous code that runs after some event has completed, such as an 
// HTTP request, a database query, or a file read.

console.log('first')
console.log('second')
console.log('third')

/// un sequential execution
console.log('first')
setTimeout(() => console.log('second'), 5000);
console.log('third')

const file_system = require('fs');
console.log('first')
file = file_system.readFile('input.js',(err, data) => {
  if (err) {
    console.error(err);
  } else {
    data += "abc"


  }
}); // 20 seconds
console.log('i am here') // 5 seconds
//  file += "read" // 5 seconds

file = file_system.readFileSync('input.js').toString();
console.log(file)

// small exercise 
// Write a Node.js program that uses callbacks to read all the files in a directory
// and logs their names to the console.

file_system.readdir("./", (error, files) => {
    if (error) console.log(error)
    files.forEach( file => console.log(file))
    })


// callback chaining
