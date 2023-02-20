class todoApp{
    constructor(name,id,status,desc){
        this.name=name;
        this.id=id;
        this.status=status;
        this.desc=desc;
    }
    createTask(){
        console.log(this.name + " Your task is created " + this.id + " and Status is " + this.status);
    }
    updateTask(desc,status) {
    if(desc!=undefined){
        desc=this.desc;
        console.log("status :" + this.desc );
    }
    if(status!=undefined){
        status=this.status;
        console.log("status :" + this.status );
    }
    }   
    print(){
        console.log("ID:" + this.id );
        console.log("Name:" + this.name );
        console.log("desc:" + this.desc );
        console.log("Status:" + this.status );
    }     
}
let a=2;
let arr=[];
for(let i=0;i<a;i++){
    const id=prompt("Enter Id:")
    let desc=prompt("Enter desc:")
    const status=prompt("Enter status:")
    let todo=new todoApp(id,desc,status)
    arr.push(todo);
}
console.log(arr);
let task=new todoApp(arr[index]);
// task.create
let user1=new todoApp("Usama",0,"Nill","Some details here");
let user2= new todoApp("Sajid",1);
let user3= new todoApp("Here is a description of User 3","Null");
// user1.createTask();
// user3.updateTask();
// user1.print();


