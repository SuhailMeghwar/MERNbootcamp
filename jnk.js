// console.log('first')
// console.log('second')
// console.log('third')

/// un sequential execution
console.log('first')
setTimeout(() => console.log('second'), 5000);
console.log('third')