import React, { useState, createContext, useEffect } from "react";

import { addItemToCart, removeItemFromCart } from "./cart.utils.js";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  cartItemsCount: 0,
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
});

const CartProvider = ({ children }) => {
  //use hooks to set default states and define local state to pass into context consumers
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const toggleHidden = () => setHidden(!hidden);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        cartItemsCount,
        addItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
