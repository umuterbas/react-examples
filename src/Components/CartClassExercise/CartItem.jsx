import React, { Component } from 'react';
import { CartContext } from './CartContext';
import ButtonCart from './ButtonCart';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';

export default class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <li
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 4fr 2fr 2fr',
          backgroundColor: 'white',
          alignItems: 'center',
          padding: '.5rem .3rem',
          gap: '.5rem',
        }}>
        <ButtonCart
          label=''
          type='remove'
          onClick={() => this.context.removeItem(item.id)}>
          X
        </ButtonCart>
        <span>{item.title}</span>

        <span>{item.quantity}</span>
        <span>${item.price.toFixed(2)}</span>
      </li>
    );
  }
}
CartItem.contextType = CartContext;
