import React, { useState } from 'react';

export default function CounterButton() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((previousState) => {
      // console.log('previousState', previousState);
      return previousState + 1;
    });
    // setCounter((previousState)=> {
    //     console.log('previousState', previousState);
    //     return previousState+1
    // });
    // setCounter(counter+1);
    // setCounter(counter+1);
    // setCounter(counter+1);
  };
  return (
    <div>
      <button onClick={handleClick}>
        <h3>Click me!</h3>
      </button>
      <p>You clicked {counter} times.</p>
    </div>
  );
}
