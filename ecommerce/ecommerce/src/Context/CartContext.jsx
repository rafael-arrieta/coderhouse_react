import { createContext, useContext, useState} from 'react'

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider = ({children})=>{
    // aca se declaran los estados y funciones globales
    const [cartList, setCartList] = useState([])

    const addToCart = (prod)=>{
        const isInCart = cartList.findIndex(producto => producto.id === prod.id)
        if (isInCart!== -1){
           cartList[isInCart].cantidad+= prod.cantidad
           setCartList([...cartList])
         }
        else{setCartList([...cartList,prod])}
        }

    const clearCart = ()=> {
        setCartList([])
    }

    const precioTotal = ()=>{
        return cartList.reduce((acumPrecio,prodObj)=>acumPrecio+=(prodObj.precio*prodObj.cantidad), 0)
    }

    const cantTotal = ()=>{
        return cartList.reduce((count, produObject)=>count+= produObject.cantidad, 0)
    }

    const removeToCart = (id)=>{
        setCartList(cartList.filter(prod=>prod.id!==id))
    }

    return(
        <CartContext.Provider value = {{
            cartList,
            addToCart,
            clearCart,
            cantTotal,
            precioTotal,
            removeToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
//removeToCart
//clearCart
// isInCart()
export default CartContextProvider