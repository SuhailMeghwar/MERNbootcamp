# `useCallback` Hook in React
The useCallback hook is used to 
1. memoize a function (not its value).

Memoization is a technique used to optimize functions by caching their results. When the same function is called with the same arguments, the cached result is returned instead of recalculating it.

## When to use useCallback
Use useCallback when you have a function that:
1. is expensive to compute
2. is frequently called
3. is passed as a prop to a child component

By memoizing the function with useCallback, you can avoid unnecessary re-renders and improve the performance of your React application.

## Syntax
The useCallback hook takes two arguments:

```jsx
const memoizedCallback = useCallback(callback, dependencies);
```
`callback`: the function to memoize

`dependencies`: an array of dependencies that the function depends on

The useCallback hook returns a memoized version of the function that will only be re-computed if one of its dependencies has changed.

### Let's put our hand to good use
Here are a few examples of how to use useCallback in React:

1. <b>Passing a function as a prop</b>

Below, we have a parent component that renders a child component and passes a function as a prop. We can use useCallback to memoize the function and avoid unnecessary re-renders of the child component.
```jsx
import { useCallback, useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <ChildComponent onClick={handleClick} />
      <p>Count: {count}</p>
    </div>
  );
}
```
The `handleClick` function will only be re-computed if the count dependency changes.

2. <b>Using useCallback with useEffect</b>
 
 Below, we have a component that fetches data from an API and updates its state. We can use useCallback to memoize the callback function passed to useEffect and avoid unnecessary re-fetching of the data.

```jsx
import React from 'react';
import { useCallback, useEffect, useState } from 'react';

export function DataFetchingComponent() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://api.github.com/users/rafay-ah');
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  },[fetchData]);

  if (isLoading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <div>
      <h1>{data.login}</h1>
      {/* <p>{data.description}</p> */}
    </div>
  );
}
```

## Couple of Exercises
1. Infinite scroll: Create an infinite scroll component that loads more data as the user scrolls down. Use useCallback to memoize the function that fetches the additional data.

2. Todo list: Create a todo list component that allows the user to add and delete items. Use useCallback to memoize the functions that add and delete items from the list.

3. Sorting table: Create a table component that allows the user to sort the data by clicking on the column headers. Use useCallback to memoize the sorting function.
4. Image gallery: Create an image gallery component that allows the user to filter the images by category. Use useCallback to memoize the filtering function.

5. Real-time search: Create a search component that filters a list of items in real-time as the user types. Use useCallback to memoize the filtering function.