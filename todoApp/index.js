class todoApp{
    constructor(id,name,desc,status){
        this.id=id;
        this.name=name;
        this.desc=desc;
        this.status=status;
    }
    createTask(){
       addEventListener('click',(e)=>{

       })
       updateTodo(id, newTitle) {
              const todo = this.todos.find(todo => todo.id === id);
              if (todo) {
                todo.title = newTitle;
              }
            }
    }
}
let user= new todoApp();
user.createTask();










// class Todo { //assign id title and mark done TODO
//     constructor(id, title) {
//       this.id = id;
//       this.title = title;
//       this.isDone = false;
//     }
  
//     markDone() { 
//       this.isDone = true;
//     }
//   }
  
//   class TodoList { //TODOLIST for TASKS 
//     constructor() {
//       this.todos = [];
//       this.nextId = 1;
//     }
  
//     addTodo(title) { //adding task and incrementing id
//       const todo = new Todo(this.nextId, title);
//       this.todos.push(todo);
//       this.nextId += 1;
//     }
  
//     markTodoDone(id) { //if task is done mark it 
//       const todo = this.todos.find(todo => todo.id === id);
//       if (todo) {
//         todo.markDone();
//       }
//     }
  
//     getTodo(id) { //for accessing specific task using id
//       return this.todos.find(todo => todo.id === id);
//     }
  
//     updateTodo(id, newTitle) {
//       const todo = this.todos.find(todo => todo.id === id);
//       if (todo) {
//         todo.title = newTitle;
//       }
//     }
  
//     deleteTodo(id) {
//       this.todos = this.todos.filter(todo => todo.id !== id);
//     }
  
//     getTodos() {
//       return this.todos;
//     }
//   }
  
//   const myTodoList = new TodoList();
//   myTodoList.addTodo("Go to the FAST Univeristy");
//   myTodoList.addTodo("Attend the MERN Training Class");
//   myTodoList.addTodo("Say Thank You Teresol");
  
//   console.log(myTodoList.getTodos());
  
//   myTodoList.markTodoDone(1);
  
//   console.log(myTodoList.getTodos());
  
//   myTodoList.updateTodo(2, "Write Code");
  
//   console.log(myTodoList.getTodos());
  
//   myTodoList.deleteTodo(3);
  
//   console.log(myTodoList.getTodos());



