import { createContext, useContext, useState} from 'react'

const CartContext = createContext([])

export const useCartContext = ()=> useContext(CartContext)

const CartContextProvider = ({children})=>{
    // aca se declaran los estados y funciones globales
    const [cartList, setCartList] = useState([])

    const addToCart = (prod)=>{
        if (cartList.find(item => item.id===prod.id)){
            for (const item in cartList){
                if (cartList[item].id==prod.id){
                cartList[item].cantidad+=prod.cantidad
            }}
        }else{ setCartList([...cartList,prod])}
    }

    const clearCart = (prod)=> {
        setCartList([])
    }

    // const removeToCart = (prod)=>{
    //     for
    // }

    return(
        <CartContext.Provider value = {{
            cartList,
            addToCart,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
//removeToCart
//clearCart
// isInCart()
export default CartContextProvider