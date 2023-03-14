import { useState, useEffect } from 'react';
// import './App.css';

// function App(props) {
//   const [state, setState] = useState(0);

//   useEffect(
//     ()=>{
//     console.log('in use Effect') 
//    }, 
//    [state]);

//   const clickHandler = ()=> {
//       setState(state+1)
//   }

//   return (
//     <div className="App">
//       {state}   <button onClick={clickHandler}>UPDATE</button>
//     </div>
//   );
// }

// export default App;


export default function App() {
  const [count, setCount] = useState(111);

  console.log("before use effect")

  useEffect(() => {
    console.log("in use effect")
  }, [count]);

  console.log("after use effect")


  function handleClick() {
    setCount(count + 1);
  }


  return (
    <>
    {count} <button onClick={handleClick}>Update</button></>
  );
}

