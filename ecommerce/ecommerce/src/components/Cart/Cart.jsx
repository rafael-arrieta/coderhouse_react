import { useCartContext } from "../../Context/CartContext"
import MiBtn from "../MiBtn/MiBtn"
import {Link} from 'react-router-dom';
import './Cart.css'

const Cart = () => {
  const {cartList,clearCart,removeToCart, precioTotal}= useCartContext()

  // const terminarCompra = ()=>{
  //   let cartObj = 
  //     cartList.map(item =>({producto: item.nombre,
  //       precio: item.precio,
  //       cantidad: item.cant
  //     }))

  //   let usuario = {
  //     nombre_usuario: 'juan perez',
  //     precio_total: precioTotal()
  //   }

  // }

  return (
    <div className="cart-container">

      <div className="cart-lista">
          <div className="cart-head">
            <p className="cart-titulo">Carrito</p>
                {cartList.map(item => (
                  <div className="cart-table" key={item.id}>
                    <div className="elemento-lista-1">{item.nombre}- {item.categoria}</div>
                    <div className="elemento-lista-1">Precio Unit: $ {item.precio} x {item.cantidad} </div>
                    <div className="elemento-lista-2">Subtotal = $ {item.precio*item.cantidad}</div>
                    <div className="elemento-lista-3">
                        <button className="eliminar-item"onClick={ () => removeToCart(item.id)}>X</button>
                    </div>
                  </div>
                  
                ))}
              
          </div>
          <div className="cart-foot">
              {precioTotal() === 0 ? 
                <>
                <p className="text-cart">NO HAY PRODUCTOS EN TU CARRITO</p>
                <div className="cart-buttons">
                  <Link to="/"><MiBtn contenido={'Iniciar compra'}/></Link>
                </div>
                </>
              :
                <>
                  <div className="cart-buttons">
                    <p className="text-cart">Precio total: ${precioTotal()}</p>
                  </div>
                  <div className="cart-buttons">
                    <button className="myButton" onClick={clearCart}> Vaciar Carrito</button>
                    <Link to="/"><MiBtn contenido={'Seguir comprando'}/></Link>
                  </div>
                </>
              }
              
          </div>
      </div>

      <div className="cart-form">
        <div className="cart-head">
          <p>FORMULARIO</p>
          <input type="submit" value="Enviar"/>
          </div>
      </div>

    </div>
  )
}

export default Cart