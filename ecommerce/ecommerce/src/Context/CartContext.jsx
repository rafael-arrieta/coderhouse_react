import { createContext, useContext, useState} from 'react'

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider = ({children})=>{
    // aca se declaran los estados y funciones globales
    const [cartList, setCartList] = useState([])

    const addToCart = (prod)=>{
        setCartList([
            ...cartList, 
            prod
        ])
    }
    return(
        <CartContext.Provider value = {{
            cartList,
            addToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider