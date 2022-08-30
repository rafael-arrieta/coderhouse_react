import { createContext, useContext, useState } from "react";

//Globals functions provider
const CartContext = createContext([]);

//This component saves the global functions used in the app
export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
    
    const [cartList, setCartList] = useState([]);

    // Function that adds products to the cart list
    // the conditional query to the function if the product is in the cart
    const addToCart = (prod) => {
        if (isInCart(prod.id)) {
            cartList[isInCart].quantity += prod.quantity;
            setCartList([...cartList]);
        } else {
            setCartList([...cartList, prod]);
        }
    };
    // Function that reset the cart list products
    const clearCart = () => {
        setCartList([]);
    };
    // Function that calculate the total price of purchase
    const getPriceTotal = () => {
        return cartList.reduce(
            (accumPrice, prodObj) =>
                (accumPrice += prodObj.price * prodObj.quantity),
            0
        );
    };
    // This function is the product quantity accumulator
    const getQuantTotal = () => {
        return cartList.reduce(
            (count, produObject) => (count += produObject.quantity),
            0
        );
    };
    // This function removes  product from the cart list
    const removeFromCart = (id) => {
        setCartList(cartList.filter((prod) => prod.id !== id));
    };
    // This function finds the existence of a product
    const isInCart = (id) => {
        cartList.findIndex((product) => product.id === id);
    };
    
    return (
        <CartContext.Provider
            value={{
                cartList,
                addToCart,
                clearCart,
                getQuantTotal,
                getPriceTotal,
                removeFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
