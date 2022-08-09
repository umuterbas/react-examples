import React from 'react';

export default function UserForm() {
  console.log('render form');
  return (
    <div className='component'>
      <h1>UserForm</h1>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100px',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          gap: '1rem',
        }}>
        <input type='text' name='name' placeholder='name' />
        <input type='email' name='email' placeholder='email' />
        <button>Login</button>
      </form>
    </div>
  );
}
