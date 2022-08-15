import React, { useContext } from 'react';
import { CounterContext } from './CounterContext';

export default function Sibling() {
  const { state } = useContext(CounterContext);
  return (
    <div className='component'>
      <h1>Sibling</h1>
      <h2>Counter: {state.counter}</h2>
    </div>
  );
}
