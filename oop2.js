// Classes and Objects

class Form{
    constructor(name,id){
        console.log("constructor called")
        this.name=name;
        this.id=id;
    }
    submit(){
        console.log(this.name + " Form submitted and the user id is " + this.id);
    }
    cancel(){
        console.log(this.name + " Form cancelled and the user id is "+ this.id)
    }
    fill(givenname){
        this.name=givenname;
    }
}
let user1=new Form("Usama",0);
// user1.fill("Usama");
let user2= new Form("Sajid",1);
// user2.fill("Sajid");
user1.submit();
user2.submit();
user2.cancel();