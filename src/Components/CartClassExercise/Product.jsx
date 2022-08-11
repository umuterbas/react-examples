import React, { Component } from 'react';
import { CartContext } from './CartContext';

export default class Product extends Component {
  render() {
    const product = this.props.product;
    return (
      <div className='component'>
        <h1>{product.title}</h1>
        <img
          src={product.image}
          alt=''
          style={{ width: '100%', height: '300px' }}
        />
        <h2>Price: ${product.price}</h2>
        <p>{product.description}</p>
        <button onClick={() => this.context.addToCart(product)}>
          Add to cart
        </button>
      </div>
    );
  }
}
Product.contextType = CartContext;
