import React from 'react';

export default function ChildFunction(props) {
  return (
    <div className='component'>
      <h1>Child Function</h1>
      <input
        type='text'
        value={props.text}
        onChange={(e) => props.setText(e.target.value)}
      />
    </div>
  );
}
