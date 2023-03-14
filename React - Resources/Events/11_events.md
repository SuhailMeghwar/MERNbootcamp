
# Events

## What is an event?

An event is an action or occurrence recognized by a software. To make an event more clear let's use the daily activities we do when we use a computer such as clicking on a button, hover on an image, pressing a keyboard, scrolling the mouse wheel and etc. Today, we will focus only some of the mouse and keyboard events. The react documentation has already a detail note about [events](https://reactjs.org/docs/handling-events.html).

Handling events in React is very similar to handling elements on DOM elements using pure JavaScript. Some of the syntax difference between handling event in React and pure JavaScript:

- React events are named using camelCase, rather than lowercase.
- With JSX you pass a function as the event handler, rather than a string.

Let's see some examples to understand event handling.

Event handling in HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Simple Html and JS</title>
  </head>
  <body>
    <button>onclick="greetPeople()">Greet People</button>
    <script>
      const greetPeople = () => {
        alert('Welcome People')
      }
    </script>
  </body>
</html>
```

In React, it is slightly different

```js
import React from 'react'
// if it is functional components
const App = () => {
  const greetPeople = () => {
    alert('Welcome again People!')
  }
  return <button onClick={greetPeople}> </button>
}
```

```js
import React, { Component } from 'react'
// if it is class components
class App extends Component {
  greetPeople = () => {
    alert('Welcome again People!')
  }
  render() {
    return <button onClick={this.greetPeople}> </button>
  }
}
```

Event handling is a very vast topic and we will focus on the most common event types being mouse and keyboard events.

_onMouseMove, onMouseEnter, onMouseLeave, onMouseOut, onClick, onKeyDown, onKeyPress, onKeyUp, onCopy, onCut, onDrag, onChange,onBlur,onInput, onSubmit_

Let's implement some more mouse and keyboard events.

```js
const App = () => {
  const [state, setState] = useState({
    firstName: '',
    message: '',
    key: '',
  });

  handleClick = (e) => {
    // e gives an event object
    // check the value of e using console.log(e)
    setState({
      ...state,
      message: 'Welcome to the world of events',
    });
  }

  // triggered whenever the mouse moves
  handleMouseMove = (e) => {
   
  }
  // to get value when an input field changes a value
  handleChange = (e) => {

  }

  // to get keyboard key code when an input field is pressed
  // it works with input and textarea
  handleKeyPress = (e) => {
    
  }

  // Blurring happens when a mouse leave an input field
  handleBlur = (e) => {
    
  }
  // This event triggers during a text copy
  handleCopy = (e) => {
    
  }
  render() {
    return (
      <div>
        <h1>Welcome to the World of Events</h1>

        <button onClick={this.handleClick}>Click Me</button>
        <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
        <p onCopy={this.handleCopy}>
          Check copy right permission by copying this text
        </p>

        <p>{this.state.message}</p>
        <label htmlFor=''> Test for onKeyPress Event: </label>
        <input type='text' onKeyPress={this.handleKeyPress} />
        <br />

        <label htmlFor=''> Test for onBlur Event: </label>
        <input type='text' onBlur={this.handleBlur} />

        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='firstName'>First Name: </label>
            <input
              onChange={this.handleChange}
              name='firstName'
              value={this.state.value}
            />
          </div>

          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
```

# Exercises

## Exercises: Level 1

1. What is an event?
2. What is the different between an HTML element event and React event?
3. Recall at least 4 keyboard events?
4. Recall at least 8 mouse events?
5. What are the most common mouse and keyboard events?
6. Write an event specific to input element?
7. Write an event specific to form element?
8. What is the difference between onInput, onChange and onBlur?
9. Where do we put the onSubmit event ?

## Exercises: Level 2
 Create a grid of squares that change color when clicked. Each square should start out with a default color, and when clicked, it should change to a random color.

<b>HINT : </b> `onClick` event to detect when a square is clicked, and the `setState` function to update the color of the square.
![On mouse enter event](/images/clickable_grid.PNG)


## Exercises: Level 3
Create a game where the user has to press a series of keys in a specific order to win. Display a series of letters or numbers on the screen, and use the onKeyDown event to detect when a key is pressed. Keep track of the keys that have been pressed, and check if the user has pressed the correct sequence to win the game.


## Exercises: Level 4

Implement the following using onMouseEnter event

![On mouse enter event](../images/react_event_on_mouse_enter.gif)
