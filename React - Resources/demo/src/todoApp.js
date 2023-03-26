import { useCallback, useState } from "react";


const Todos = ({ todos, addTodo }) => {
    console.log("i am reloaded / re-rendered");
    return (
      <>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo + index}</p>;
        })}
  
        <button onClick={addTodo}>Add Todo</button>
      </>
    );
  };

export const Callbackhook = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `new Entry`]);
  }, [todos]);

//   const addTodo = () => {
//     setTodos((prev) => [...prev, `new Entry`]);
//   };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};


