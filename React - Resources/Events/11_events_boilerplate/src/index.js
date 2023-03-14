import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [state, setState] = useState({
    firstName: '',
    message: '',
    key: '',
  });

  const handleClick = (e) => {
    setState({
      ...state,
      message: 'Welcome to the world of events',
    });
    console.log(e)
  };

  const handleMouseMove = (e) => {
    setState({
      ...state,
      message: 'mouse is moving',
    });
  };

  const handleChange = (e) => {
    setState({
      ...state,
      firstName: e.target.value,
      message: e.target.value,
    });
  };

  const handleKeyPress = (e) => {
    setState({
      ...state,
      message: `${e.target.value} has been pressed and the keycode is` + e.charCode,
    });
  };

  const handleBlur = (e) => {
    setState({
      ...state,
      message: 'Input field has been blurred',
    });
  };

  const handleCopy = (e) => {
    setState({
      ...state, // spread operator to preserve the other properties
      message: 'Hope you are learning!',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent the form from submitting and reloading the page
    // use from data
    console.log(state.firstName);
  };
  

  return (
    <div>
      <h1>Welcome to the World of Events</h1>

      <button onClick={handleClick}>Click Me</button>
      <button onMouseMove={handleMouseMove}>Move mouse on me</button>
      <p onCopy={handleCopy}>
        Check copy right permission by copying this text
      </p>

      <p>{state.message}</p>
      <label htmlFor=""> Test for onKeyPress Event: </label>
      <input type="text" onKeyPress={handleKeyPress} />
      <br />

      <label htmlFor=""> Test for onBlur Event: </label>
      <input type="text" onBlur={handleBlur} />

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name: </label>
          <input
            onChange={handleChange}
            name="firstName"
            value={state.value}
          />
        </div>

        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
