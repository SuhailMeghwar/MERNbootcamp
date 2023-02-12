// Buliding blocks of OOP: Objects and classes
// Real world entity or object(box,book)
// Way of programming to use in programs(e.g procedural programming,functional programmibg)
// Class:prototype or blueprint from which objects are created
// Without class object dosent exist
// Object is an instance of class that hold data(values) in its variables.object can be accessed by function
// Abstraction: (Hide the internal complexitity-)Extracting essential properties and behaviour of an entity class represents such an abstraction and is commonly reffered to as an abstract data type
// Encapsulation: Mechanism by which we combine data and the function that manipulates the data into one unit objects and classes enforce encapsulation.
// SandBox(An isolated environment)
// Inheritance: Relation b/w parent and child classes-create new classes(derived classes-child class) from existing classes(base classes-parent)-provide the ability to re use code(the derived class inherit the variable and functions of the base class and add addition onces.)
// Polymorphism: something chng himself repetedly.
// Access specifier:-
// 1. public(can extract anything) 
// 2. private (can not extract the outer classes)
// 3. protected (something do and somthing not to do)
// 4. final (something will be constant)
// 5. static (do not accept variations)
// Constructor(Always a function)
// Constructor Overloading


// class Fruit {
//     constructor(id,name){
//         this.id=0;
//         this.name=mango;
//     }
//     hello(){
//         console.log(this.name);
//         console.log(`Hi ${this.id}`);
//     }
// }


// class User{
//     constructor(name){
//         this.name=name;
//     }
//     sayhi(){
//         console.log(this.name);
//     }
// }

// class Admin{
//     constructor(id){
//         this.id=id;
//     }
//     login(){
//         console.log(`LogIn Successful: ${this.id}`)
//     }
// }
// let user =new User("usama");
// user.sayhi()
// console.log(typeof User);
// let admin=new Admin("001")
// admin.login();


// class Button{
//     constructor(value){
//         this.value=value;
//     }
//     click(){
//         console.log(this.value);
//     }
// }
// let button=new Button("Hello");
// button.click();
// setTimeout(()=>button.click(),1000);

// class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     run(speed) {
//       this.speed = speed;
//       alert(`${this.name} runs with speed ${this.speed}.`);
//     }
//     stop() {
//       this.speed = 0;
//       alert(`${this.name} stands still.`);
//     }
//   }

//   let animal = new Animal("My animal");

// class Rabbit extends Animal {
//     hide() {
//       alert(`${this.name} hides!`);
//     }
//   }

//   let rabbit = new Rabbit("White Rabbit");

//   rabbit.run(5); // White Rabbit runs with speed 5.
//   rabbit.hide(); // White Rabbit hides!


// class User {
//     constructor(name) {
//         this.name = name;
//         this.id = 22;
//     }
//     sayhi() {
//         console.log(this.name);
//     }
// }

// class Admin extends User {
//     constructor(id) {
//         this.id = id;
//     }
//     login() {
//         console.log(`LogIn Successful: ${this.id}`)
//     }
// }
// Admin.login();
// let user = new User("usama");
// user.sayhi()
// console.log(typeof User);
// let admin = new Admin("001")
// admin.login();

class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }
    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

let animal = new Animal("My animal");

class Rabbit extends Animal {
    static name="haha";
    constructor() {
        this.super("green rabbit");
    }
    hide() {
        console.log(`${this.name} hides!`);
    }
}

let rabbit = new Rabbit("White Rabbit");
rabbit.run(5);
rabbit.hide();

