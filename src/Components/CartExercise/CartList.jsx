import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';
export default function CartList() {
  const { cartList, calculateTotal } = useContext(CartContext);
  const parseCartList = cartList.map((item) => <CartItem item={item} />);
  return (
    <div className='component'>
      <h1>Cart list</h1>
      <ul>{parseCartList}</ul>
      Total: ${calculateTotal()}
    </div>
  );
}
