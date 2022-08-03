import { useCartContext } from "../../Context/CartContext"




const Cart = () => {

  const {cartList,clearCart}= useCartContext()
  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartList.map(item => (
            <li key={item.id}>
              {item.nombre} - {item.categoria} - {item.id} - {item.cantidad} 
              <button>X</button> 
            </li>
        ))}
      </ul>
      <button onClick={clearCart}>vaciar Carrito</button>
    </div>
  )
}

export default Cart