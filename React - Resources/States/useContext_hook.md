# `useContext` Hook in React
The useContext hook is a built-in React hook that provides a way to pass data through the component tree without having to pass props down manually at every level. It allows you to consume a context that has been created by a parent component and access its values. 

## Syntax
The useContext hook takes a context object created using the createContext function as an argument and returns the current value of the context. Here's an example of how to use the useContext hook:

```jsx 
import React, { useContext } from 'react';

const MyContext = React.createContext({});

function ChildComponent() {
  const { value } = useContext(MyContext);

  return <div>{value}</div>;
}

function ParentComponent() {
  return (
    <MyContext.Provider value={{ value: 'Hello World!' }}>
      <ChildComponent />
    </MyContext.Provider>
  );
}
```

### When to Use useContext
The useContext hook is useful when you have data that needs to be shared across many levels of the component tree, and you want to avoid the "prop drilling" that comes with passing data down manually through many levels of components.

1. When you have a global state that needs to be accessed by many components.
2. When you have a theme or configuration that needs to be accessed by many components.
3. When you have a set of utility functions that need to be accessed by many components.

### Exercises

1. Theme Switcher: Create a theme switcher component that allows the user to switch between light and dark mode. Use useContext to manage the theme state across multiple components.

2. User Authentication: Create a user authentication component that manages the user's authentication status across multiple components. Use useContext to manage the user's authentication state.

3. Language Selector: Create a language selector component that allows the user to switch between different languages. Use useContext to manage the language state across multiple components.

4. Authorization System: Create an authorization system that manages the user's permissions across your application. Use useContext to manage the user's permissions and provide them to your components.

The goal is to make sort of Global Sate Mangement mechanism.