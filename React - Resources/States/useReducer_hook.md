# `useReducer` Hook in React
The useReducer hook is a powerful tool for managing complex state in React applications.

 It allows you to define a reducer function that updates state based on actions dispatched to it.

### Basic Syntax
The useReducer hook takes two arguments:
1. a reducer function  
2. an initial state value

The reducer function takes two arguments: 
1. the current state
2. an action object 

It returns the new state. Here's an example of how to use the useReducer hook:

``` jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}

```

## When to Use useReducer
The useReducer hook is useful when you need to manage complex state that involves multiple sub-values or when you need to perform a series of state updates based on the previous state. 

1. When you have a complex state object that involves multiple sub-values.
2. When you need to perform a series of state updates based on the previous state.
3. When you need to update state based on asynchronous data or user input.
4. When you need to share state between multiple components.


### Exercises

1. Shopping cart: Create a shopping cart component that allows the user to add and remove items from their cart. Use useReducer to manage the state of the cart.

2. Authentication: Create an authentication component that allows the user to log in and log out. Use useReducer to manage the state of the authentication status.

3. Tabbed interface: Create a tabbed interface component that allows the user to switch between different tabs. Use useReducer to manage the state of the selected tab.

3. Wizard form: Create a wizard form component that guides the user through a multi-step form. Use useReducer to manage the state of the form data.
