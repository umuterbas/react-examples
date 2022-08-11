import React, { Component } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';

export default class CartList extends Component {
  render() {
    const parseCartList = this.context.cartList.map((item) => (
      <CartItem item={item} key={item.id} />
    ));
    return (
      <div className='component'>
        <h1>Cart list</h1>
        <ul>{parseCartList}</ul>
        Total: ${this.context.calculateTotal()}
      </div>
    );
  }
}
CartList.contextType = CartContext;
