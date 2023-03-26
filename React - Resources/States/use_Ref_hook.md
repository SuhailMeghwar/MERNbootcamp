# the `useRef` Hook in React
1. built-in hook
2. provides a way to access and modify a DOM element or a component's state without triggering a re-render.

This can be useful in various scenarios, such as accessing an input field's value, focusing an input field, or storing mutable values.

```jsx
const refContainer = useRef(initialValue);
```

### Parameters
`initialValue` (optional): The initial value of the ref object.

### Return Value
The useRef hook returns an object with a single property named `current`. The current property is initialized to the initialValue parameter passed to the useRef hook.

```{ current: null }```

## Common use cases
Here are some common use cases for the useRef hook:

1. Accessing DOM elements: You can use useRef to get a reference to a DOM element and manipulate it directly. For example:

```jsx
import { useRef, useEffect } from 'react';

function MyComponent() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input type="text" ref={inputRef} />;
}
```

2. Storing mutable values: used to store mutable values that persist across re-renders. Unlike state, changing the value of a ref object does not trigger a re-render. 

```jsx
import { useRef, useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
    setCount(count+1)
  }, [count]);

  const prevCount = prevCountRef.current;

  return (
    <>
      <p>Current count: {count}</p>
      {prevCount && <p>Previous count: {prevCount}</p>}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
```
3. Implementing focus management and keyboard shortcuts in a component

```jsx
import { useRef, useEffect, useCallback } from 'react';

function MyComponent() {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current.focus();
  }, []);

  const handleClick = useCallback(() => {
    console.log('Button clicked!');
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter') {
      handleClick();
    }
  }, [handleClick]);

  return (
    <button ref={buttonRef} onClick={handleClick} onKeyDown={handleKeyDown}>
      Click me!
    </button>
  );
}

```

4. Caching values computed during rendering for use in later rendering 
```jsx
import { useRef } from 'react';

function MyComponent({ data }) {
  const expensiveResultRef = useRef(null);

  if (!expensiveResultRef.current) {
    expensiveResultRef.current = computeExpensiveResult(data);
  }

  // Use expensiveResultRef.current in rendering or effects...
}

```
5. Integrating with third-party libraries that require a reference to a DOM node or component instance

```jsx
import React from 'react';
import { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

export function MyMap() {
  const apiKey = "pk.eyJ1IjoieWF5b2I1NDM0NiIsImEiOiJjbGZjYzluZXEwbmV6M3duMTIxNmdibGZxIn0.RxETwDK4UjmHPJkXQSF3Ow"
  
  const satellite_view = "mapbox://styles/mapbox/satellite-v9";
  const initialCoords = new mapboxgl.LngLat(73.105589, 33.704615);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = apiKey;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
    //   style: 'mapbox://styles/mapbox/streets-v11',
    style: satellite_view,
      center: initialCoords,
      zoom: 12
    });

    return () => {
      mapRef.current.remove();
    };
  }, [apiKey, initialCoords]);

  return <div ref={mapContainerRef} style={{ height: '400px' }} />;
}

```
## Recap
The useRef hook provides a way to access and manipulate DOM elements and store mutable values without triggering a re-render. Understanding when and how to use useRef can help you write more efficient and performant React components.

# Exercise Level 2

1. Toggle button: Create a toggle button that changes its text from "ON" to "OFF" and vice versa when clicked. Use useRef to keep track of the button's text.

2. Scroll to top button: Create a button that scrolls the page to the top when clicked. Use useRef to get a reference to the top of the page.

3. Typing game: Create a typing game that displays a random sentence and asks the user to type it as fast as possible. Use useRef to keep track of the time elapsed.

4. Password strength meter: Create a password strength meter that updates in real-time as the user types. Use useRef to keep track of the password strength.

5. Color picker: Create a color picker that allows the user to select a color from a grid of colors. Use useRef to keep track of the currently selected color.
