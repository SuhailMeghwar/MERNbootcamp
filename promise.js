/**A singer anology
 1. A “producing code” that does something and takes time. For instance, some code
 that loads the data over a network. That’s a “singer”.
 2. A “consuming code” that wants the result of the “producing code” once it’s ready.
  Many functions may need that result. These are the “fans”.

3. The executor should perform a job (usually something that takes time) and then call
 resolve or reject to change the state of the corresponding promise object.
 *  */ 

let promise = new Promise(function(resolve, reject) {
    // executor (the producing code, "singer")
  });
// // the function passed to promise is called as executor.

// // resolve and reject are callbacks provided by JavaScript itself.
// // resolve(value) — if the job is finished successfully, with result value.
// // reject(error) — if an error has occurred, error is the error object.

let our_promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
  });

  let failed_promise = new Promise(function(resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });

// // then keyword
// promise.then(
//     function(result) { /* handle a successful result */ },
//     function(error) { /* handle an error */ }
//   );

// our_promise.then(
//     result => alert(result), // shows "done!" after 1 second
//     error => alert(error) // doesn't run
//   );




// API requests
// npm install node-fetch@2
const fetch = require('node-fetch');
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((json) => console.log(json));

