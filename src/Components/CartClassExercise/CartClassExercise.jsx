import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import { CartProvider } from './CartContext';

export default class CartClassExercise extends Component {
  render() {
    return (
      <div className='component'>
        <h1>Cart Class Exercise</h1>
        <CartProvider>
          <Navbar />
          <Main />
        </CartProvider>
      </div>
    );
  }
}
