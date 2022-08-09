import React from 'react';
import Navbar from './Navbar';
import Main from './Main';

export default function Context() {
  return (
    <div className='component'>
      <h1>App</h1>
      <Navbar />
      <Main />
    </div>
  );
}
