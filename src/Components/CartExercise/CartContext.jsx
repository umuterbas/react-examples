import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const addToCart = (product) => {
    setCartList((prevState) => [...prevState, product]);
  };
  const calculateTotal = () => {
    return cartList.reduce((total, item) => {
      return total + item.price;
    }, 0);
  };
  /*
  [{id:1},{id:2}, ...]
  [{id:2}, ...]
  */
  const removeItem = (id) => {
    setCartList(
      //   cartList.filter((item) => {
      //     return item.id !== id;
      //   })
      // same thing
      // !==
      cartList.filter((item) => item.id !== id)
    );
  };
  return (
    <CartContext.Provider
      value={{ cartList, addToCart, calculateTotal, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
