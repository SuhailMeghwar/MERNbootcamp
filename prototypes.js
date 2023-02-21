let animal = {
    eats: true
  };

  let rabbit = {
    jumps: true
  };
  
  rabbit.__proto__ = animal; // (*)
  
  // we can find both properties in rabbit now:
  console.log( rabbit.eats ); // true (**)
  console.log( rabbit.jumps ); // true
  rabbit["jumps or not"]
  rabbit['walk']

let obj = {};
console.log("" + obj ); // "[Object Object]" ?




  // Solution to Prototype Conversion exercise
  let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };
  
  console.log( pockets.pen ); // 3
  console.log( bed.glasses ); // 1
  console.log( table.money ); // undefined