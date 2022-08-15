import { createContext, useReducer, useState } from 'react';

export const CounterContext = createContext();

const reducer = (state, action) => {
  console.log('action', action);
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + action.payload };
    case 'decrement':
      return { counter: state.counter - action.payload };
    case 'reset':
      return { counter: 0 };
    default:
      return state;
  }
};

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  //   const [count, setCount] = useState(0);
  //   const increment = () => {
  //     setCount((prevState) => prevState + 1);
  //   };
  //   const decrement = () => {
  //     setCount((prevState) => prevState - 1);
  //   };
  //   const reset = () => {
  //     setCount(0);
  //   };
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
