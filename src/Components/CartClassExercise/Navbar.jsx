import React, { Component } from 'react';
import { CartContext } from './CartContext';

export default class Navbar extends Component {
  render() {
    console.log(this.context);
    return (
      <div className='component'>
        <h1>Navbar</h1>
        <div style={{ display: 'flex', justifyContent: 'end', gap: '1rem' }}>
          <h2>Cart</h2>
          <h2>{this.context.cartList.length}</h2>
        </div>
      </div>
    );
  }
}
Navbar.contextType = CartContext;
