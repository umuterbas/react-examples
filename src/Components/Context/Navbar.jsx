import React from 'react';

export default function Navbar() {
  console.log('render navbar');
  return (
    <div className='component'>
      <h1>Navbar</h1>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          gap: '1rem',
        }}>
        <span
          style={{
            border: '1px solid black',
            borderRadius: '50%',
            height: '2rem',
            width: '2rem',
            backgroundColor: 'black',
            display: 'inline-block',
          }}></span>
        email
      </div>
    </div>
  );
}
