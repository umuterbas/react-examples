import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAxios from '../CustomHook/hooks/useAxios';
import Product from './Product';

export default function Products() {
  const [productList, setProductList] = useState([]);
  const { data } = useAxios('https://fakestoreapi.com/products', 'get', null);
  useEffect(() => {
    console.log('data products', data);
    setProductList(data);
  }, []);
  // useEffect(() => {
  //   axios
  //     .get('https://fakestoreapi.com/products')
  //     .then((response) => setProductList(response.data));
  // }, []);
  const parseProductList = productList
    ? productList.map((product) => (
        <Product product={product} key={product.id} />
      ))
    : [];
  return (
    <div className='component'>
      <h1>Product list</h1>
      <section
        style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
        {parseProductList}
      </section>
    </div>
  );
}
