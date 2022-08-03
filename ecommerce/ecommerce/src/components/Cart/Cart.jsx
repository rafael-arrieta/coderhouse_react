import { useCartContext } from "../../Context/CartContext"




const Cart = () => {

  const {cartList}= useCartContext()
  return (
    <div>
      <h1>Carrito</h1>
      <ul>
        {cartList.map((item)=>(

          <li key={item.id}>

             - {item.nombre} - {item.categoria}

          </li>

        ))}

      </ul>
    </div>
  )
}

export default Cart

