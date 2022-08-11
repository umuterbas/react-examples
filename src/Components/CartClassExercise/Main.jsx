import React, { Component } from 'react';
import Products from './Products';
import CartList from './CartList';

export default class Main extends Component {
  render() {
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
}
