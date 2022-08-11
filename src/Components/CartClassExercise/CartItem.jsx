import React, { Component } from 'react';
import { CartContext } from './CartContext';

export default class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <li style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr' }}>
          <div>
            <button onClick={() => this.context.removeItem(item.id)}>X</button>
            <span>{item.title}</span>
          </div>
          <span>{item.quantity}</span>
          <span>${item.price}</span>
        </li>
      </div>
    );
  }
}
CartItem.contextType = CartContext;
