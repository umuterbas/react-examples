import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';
import { signIn, signOut } from './loggedSlice';
export default function Main() {
  const count = useSelector((state) => state.counter.value);
  const isLogged = useSelector((state) => state.logged.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Main</h2>
      <div>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}>
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(incrementByAmount(5))}>
          Increment by amount
        </button>
      </div>
      <div>
        <h2>The user is logged: {isLogged.toString()}</h2>
        <button onClick={() => dispatch(signIn())}>Sign in</button>
        <button onClick={() => dispatch(signOut())}>Sign out</button>
      </div>
    </div>
  );
}
