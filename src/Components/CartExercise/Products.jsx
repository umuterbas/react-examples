import React from 'react';
import Product from './Product';

export default function Products() {
  return (
    <div className='component'>
      <h1>Product list</h1>
      <section
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
        <Product
          product={{
            title: 'Product Name',
            price: 0,
            image: '',
            description: 'Product Description',
          }}
        />
        <Product
          product={{
            title: 'Product Name',
            price: 0,
            image: '',
            description: 'Product Description',
          }}
        />
        <Product
          product={{
            title: 'Product Name',
            price: 0,
            image: '',
            description: 'Product Description',
          }}
        />
        <Product
          product={{
            title: 'Product Name',
            price: 0,
            image: '',
            description: 'Product Description',
          }}
        />
        <Product
          product={{
            title: 'Product Name',
            price: 0,
            image: '',
            description: 'Product Description',
          }}
        />
      </section>
    </div>
  );
}
