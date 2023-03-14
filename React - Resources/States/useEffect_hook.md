# `useEffect` Hook in React

Hooks provide an easy way to manage state and perform side effects in functional components.


## What is the useEffect Hook?
The useEffect hook is a function that allows functional components to perform side effects.

 A side effect is any operation that affects something outside of the function itself, such as fetching
 1.  data from an API
 2. updating the document title,
 3. setting up event listeners.

Before the useEffect hook, developers used lifecycle methods such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` to manage side effects in class components. 

The useEffect hook provides a similar functionality in functional components.

## How to use useEffect
The useEffect hook takes two arguments: 
1. a callback function 
2. an optional array of dependencies

The callback function is the side effect you want to perform, and the array of dependencies tells React when to run the side effect.

Let's use `useEffect` hook to fetch data from an API:

```jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('/api/data').then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}
```

In useEffect hook we are passing a callback function that makes the API call using axios.


## Common Use Cases for the useEffect Hook
1. Fetching Data from an API

2. Updating the Document Title: can use the useEffect hook to update the document title when the component mounts.

```jsx
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    document.title = 'My Component';
  }, []);

  return <div>Hello, world!</div>;
}
```

## Exercises


- Use the useEffect hook to fetch data from an API and display it in a list. The API endpoint is https://jsonplaceholder.typicode.com/posts. Each item in the list should display the post title and body.


- Use the useEffect hook to set up an event listener for the mousemove event on the document object. The event listener should log the current mouse coordinates to the console.

- Use the useEffect hook to fetch data from an API every time a user clicks a button. The API endpoint is https://jsonplaceholder.typicode.com/todos/1. Display the title of the fetched todo item in the component.