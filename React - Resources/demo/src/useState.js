import React from "react";
import { useState, useReducer } from "react";

// export function Counter() {
//   const [count, setCount] = useState(0)

//   function changeCount(amount) {
//     setCount(prevCount => prevCount + amount)
//   }

//   function resetCount() {
//     setCount(0)
//   }

//   return (
//     <>
//       <span>{count}</span>
//       <button onClick={() => changeCount(1)}>+</button>
//       <button onClick={() => changeCount(-1)}>-</button>
//       <button onClick={() => resetCount()}>Reset</button>
//     </>
//   )
// }



function reducer(count, action) {
    switch (action.type) {
      case 'increment':
        return count + 1
      case 'decrement':
        return count - 1
      case 'reset':
        return 0
      default:
        return count
    }
  }
  
 export function Counter() {
    const [count, dispatch] = useReducer(reducer, 0)
  
    return (
      <>
        <span>{count}</span>
        <button onClick={() => dispatch({ type: 'increment' })}>
          +
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          -
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
      </>
    )
  }




function reducer(count, action) {
    switch (action.type) {
      case 'increment':
        return count + 1
      case 'decrement':
        return count - 1
      case 'reset':
        return 0
      case 'change-count':
        return count + action.payload.amount
      default:
        return count
    }
  }
  
 export function Counter() {
    const [count, dispatch] = useReducer(reducer, 0)
  
    return (
      <>
        <span>{count}</span>
        <button onClick={() => dispatch({ type: 'increment' })}>
          +
        </button>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          -
        </button>
        <button onClick={() => {
          dispatch({ type: 'change-count', payload: { amount: 5 } })
        }}>
          Add 5
        </button>
        <button onClick={() => dispatch({ type: 'reset' })}>
          Reset
        </button>
      </>
    )
  }