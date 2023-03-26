import React from 'react';
import { useEffect, useState, useRef, useCallback } from 'react';

export function PageReload() {
  const [reload, setReload] = useState(0);
  const increment_state = useRef(0);
  // {current : 0}
  
  useEffect(() => {
    increment_state.current = increment_state.current +1;
    console.log(increment_state)
    // setReload(reload+1);

  });


  // return(
  // <>
  // <h1>i have been reloaded {increment_state.current} many times</h1>
  // </>    
  // )


    // const inputRef = useRef(null);
  
    // useEffect(() => {
    //   console.log(inputRef);
    //   inputRef.current.textContent = "dfdfd";
    // }, []);
  
    // return <button ref={inputRef} />;



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




// const [reload_counter, setreload_counter] = useState(0)


// useEffect(() => {
// // on reload
// setreload_counter(reload_counter+1);
// });
