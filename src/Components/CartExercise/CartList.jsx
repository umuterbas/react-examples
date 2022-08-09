import React from 'react';

export default function CartList() {
  return (
    <div className='component'>
      <h1>Cart list</h1>
      <ul>
        <li style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
          <span>Product title</span>
          <span>$0</span>
        </li>
      </ul>
      Total: $0
    </div>
  );
}
