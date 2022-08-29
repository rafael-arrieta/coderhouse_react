import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  // aca se declaran los estados y funciones globales
  const [cartList, setCartList] = useState([]);

  const addToCart = (prod) => {
    const isInCart = cartList.findIndex((product) => product.id === prod.id);
    if (isInCart !== -1) {
      cartList[isInCart].quantity += prod.quantity;
      setCartList([...cartList]);
    } else {
      setCartList([...cartList, prod]);
    }
  };

  const clearCart = () => {
    setCartList([]);
  };

  const priceTotal = () => {
    return cartList.reduce(
      (accumPrice, prodObj) => (accumPrice += prodObj.price * prodObj.quantity),
      0
    );
  };

  const quantTotal = () => {
    return cartList.reduce(
      (count, produObject) => (count += produObject.quantity),
      0
    );
  };

  const removeToCart = (id) => {
    setCartList(cartList.filter((prod) => prod.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        clearCart,
        quantTotal,
        priceTotal,
        removeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
//removeToCart
//clearCart
// isInCart()
export default CartContextProvider;
