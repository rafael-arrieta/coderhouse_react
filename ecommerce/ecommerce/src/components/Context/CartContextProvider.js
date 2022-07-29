import { createContext} from 'react'

const CartContext = createContext([])

const CartContextProvider = ({children})=>{
    // aca se declaran los estados y funciones globales

    return(
        <CartContext.Provider value = {{}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider