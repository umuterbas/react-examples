import React, { Component } from 'react';
import { CartContext } from './CartContext';
import ButtonCart from './ButtonCart';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';

export default class CartItem extends Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <li style={{ display: 'grid', gridTemplateColumns: '5fr 1fr 1fr' }}>
          <div>
            <ButtonCart
              colors={{
                bgColor: 'red',
                color: 'white',
              }}
              label={<MdOutlineRemoveShoppingCart />}
              onClick={() => this.context.removeItem(item.id)}
            />
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
