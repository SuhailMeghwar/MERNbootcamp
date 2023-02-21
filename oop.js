// Basic Syntax 
// class MyClass {
//     // class methods & properties
//      { ... }
//     method1() { ... }
//     method2() { ... }
//     method3() { ... }
//     ...constructor()
// }

// Lets Build a Sample Class
class User {
    constructor(name) {
      this.name = name;
    }

    sayHi() {
      console.log(this.name);
    }
}
  
// Usage:
let user = new User("Usman");
user.name = "p"
user.sayHi();

// HMM.. But what about getters & setters
class User {
    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    } 
  }
  
  let user = new User("Usman");
  console.log(user.name); // Usman
  
  user = new User(""); // Name is too short.

// OKAY.. Now let's put in some feilds
class User {
    name = "John";
  
    sayHi() {
        console.log(`Hello, ${this.name}!`);
    }
  }
  
  new User().sayHi(); // Hello, John!


// "Loosing This" problem -- changing context of function call
class Button {
    constructor(value) {
      this.value = value;
      // this.click = click; // function binding
    }
  
    click() {
      console.log(this.value);
    }
  }
  
  let button = new Button("hello");

  setTimeout(button.click, 1000); // undefined

// Solution ..? 1. write wrapper function, function binding

class Button {
    constructor(value) {
      this.value = value;
    }
    click = () => {
      alert(this.value);
    }
  }
  
  let button = new Button("hello");
  
  setTimeout(button.click, 1000); // hello


// SUMMARY
class MyClass {
    prop = value; // property
  
    constructor(...) { // constructor
      // ...
    }
  
    method(...) {} // method
  
    get something(...) {} // getter method
    set something(...) {} // setter method
 
    // ...
  }

// INHERITANCE - create functionality on top of existing
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  }
  
  let animal = new Animal("My animal");

class Rabbit extends Animal {
    hide() {
      alert(`${this.name} hides!`);
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.hide(); // White Rabbit hides!

// function Over-riding
class Rabbit extends Animal {
    stop() {
      // ...now this will be used for rabbit.stop()
      // instead of stop() from class Animal
    }
  }

// SUPER keyword -- 
// 1. super.method(...) to call a parent method.
// 2. super(...) to call a parent constructor (inside our constructor only).

class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
  
    run(speed) {
      this.speed = speed;
      alert(`${this.name} runs with speed ${this.speed}.`);
    }
  
    stop() {
      this.speed = 0;
      alert(`${this.name} stands still.`);
    }
  
  }
  
  class Rabbit extends Animal {
     static name = "static";
    constructor(){
      super()
      console.log("we love you rabbits!!")
    }

    static hide() {
      alert(`${this.name} hides!`);
    }
  
    stop() {
      super.stop(); // call parent stop
      this.hide(); // and then hide
    }
  }
  
  let rabbit = new Rabbit("White Rabbit");
  
  rabbit.run(5); // White Rabbit runs with speed 5.
  rabbit.stop(); // White Rabbit stands still. White Rabbit hides!

// use super when overriding constructors.
// static methoods and properties.






