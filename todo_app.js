class TodoApp {
   constructor(id, status, description){
    this.id = id;
    this.status = status;
    this.description = description
   }

   create_task(){
    console.log(`Your task with id:${this.id} has been created!`)
   }

   update_task(status, description){
    if (status != undefined) {
        this.status = status;   
    }
   
    if (description != undefined) {
        this.description = description;     
    }
   }

   print_task(){
    console.log(`ID : ${this.id}`)
    console.log(`Description : ${this.description}`)
    console.log(`Status : ${this.status}`)
   }
}

let my_task = new TodoApp(1,"PENDING","Read a long book!");
my_task.print_task();

// let's update a task
my_task.update_task("Completed");
my_task.print_task();

// according to google baba
const {...object} = classInstance

Array.push({id:this.id, status:this.status, description: this.description})


