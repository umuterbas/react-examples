import React, { Component } from 'react';
import { CartContext } from './CartContext';
import ButtonCart from './ButtonCart';

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
        <ButtonCart
          onClick={() => this.context.addToCart(product)}
          label='Add to cart'
          colors={{
            color: 'white',
            bgColor: 'hsl(158, 36%, 37%)',
          }}></ButtonCart>
      </div>
    );
  }
}
Product.contextType = CartContext;
