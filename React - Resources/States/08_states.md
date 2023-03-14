

# States

## What is State?

What is state ? The English meaning of state is _the particular condition that someone or something is in at a specific time_.

Let us see some states being something - Are you happy or sad? - Is light on or off ? Is present or absent ? - Is full or empty ? For instance, I am happy because I am enjoying React . I believe that you are happy too.

State is an object in react which let the component re-render when state data changes.

## How to set a state

We set an initial state for the components. We do not directly change or mutate the state but we use the _setState()_ method to reset to a new state. As you can see below in the state object we have count with initial value 0. We can access the state object using _this.state_ and the property name. See the example below.

```js
// index.js
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  // declaring state
  state = {
    count: 0,
  }
  render() {
    // accessing the state value
    const count = this.state.count
    return (
      <div className='App'>
        <h1>{count} </h1>
      </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
```

If you run the above code you will see zero on the browser. We can increase or decrease the value the state by changing the value of the state using JavaScript method.

Okay, so what if it were a functional component ??
```js
import React, {useState} from "react";
 
const MyStateFullComponent = () => {
    const [value, setValue] = useState(1);

    function clickhandler(){
      setValue(value+1);
    }
    return (
        <div>
            <p>{value}</p>
            <button onClick={clickHandler}>Increment Value</button>
        </div>
    );
};
```

## Let's do a Exercise
<b>Write a Statefull component to incerment and decrement counter on click events. </b>


Let us do more example about state, in the following example we will develop small application which shows either a dog or cat.
We can start by setting the initial state with cat then when it is clicked it will show dog and alternatively. We need one method which changes the animal alternatively.

```js
  // set initial value of state
  state = {
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
  }
  changeAnimal = () => {
    let dogURL =
      'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg'
    let catURL =
      'https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg'
    let image = state.image === catURL ? dogURL : catURL
    setImage({ image })
  }

    return (
      <div className='App'>
     
        <img src={state.image} alt='animal' />

        <button onClick={changeAnimal}>
          Change
        </button>
      </div>
    )
```



I believe that now you have a very good understanding of state.we will use state EVERYWHERE in other sections too because state and props is the core of a react application.

## Exercises

### Exercises: Level 1

1. What was your state today? Are you happy? I hope so. If you manage to absorb all the previously studied things you should be happy.
2. What is state in React ?
3. What is the difference between props and state in React ?
4. How do you access state in a React component ?
5. How do you set a set in a React component ?

### Exercises: Level 2

1. Use React state to change the background of the page on click of a button[From Dark mode to Light mode and other way around]. 

2.  Let's make a random country selector that selects and displays contry information.

![Change Background](../images/08_day_select_country_exercise.gif)
