import React from 'react';
import CartList from './CartList';
import Products from './Products';

export default function Main() {
  return (
    <div className='component'>
      <h1>Main</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr' }}>
        <Products />
        <CartList />
      </div>
    </div>
  );
}
