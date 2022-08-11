import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const addToCart = (product) => {
    //if list is not empty
    if (cartList.length > 0) {
      //check if product is in the list
      const productIndex = cartList.findIndex((item) => item.id === product.id);
      // if includes
      if (productIndex !== -1) {
        const productSelected = cartList[productIndex];
        // update only selected product, increasing the quantity by 1
        const updatedCartList = cartList.map((item) => {
          if (item.id === productSelected.id) {
            return {
              ...productSelected,
              quantity: productSelected.quantity + 1,
            };
          } else {
            return item;
          }
        });
        setCartList(updatedCartList);
      } else {
        // if not included
        setCartList([...cartList, { ...product, quantity: 1 }]);
      }
    } else {
      setCartList([{ ...product, quantity: 1 }]);
    }
  };
  const calculateTotal = () => {
    return cartList.reduce((total, item) => {
      return total + item.price * item.quantity;
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
