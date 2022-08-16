import { useCartContext } from "../../Context/CartContext"
import MiBtn from "../MiBtn/MiBtn"
import {Link} from 'react-router-dom';
import{addDoc, collection, doc, documentId, getDocs, getFirestore, query, updateDoc, where, writeBatch} from 'firebase/firestore'
import './Cart.css'

const Cart = () => {
  const {cartList,clearCart,removeToCart, precioTotal}= useCartContext()

  const finishBuying = async(e) =>{
    e.preventDefault();
    
    const order = {}
    //order.buyer=
    order.items = cartList.map(prod => {
      return {
        product: prod.nombre,
        id: prod.id,
        price: prod.precio
      }
    })
    order.total = precioTotal()

    const db = getFirestore();
    const queryOrders = collection(db, 'orders')
    addDoc(queryOrders, order)
    .then (resp => alert('Gracias por tu compra!!\n'+'se envió un email con el detalle y el ID de tu compra: \n' + resp.id));
    // const queryUpdateDoc = doc (db, 'items', )
    // updateDoc(queryUpdateDoc, 'stock')

    const queryCollectionStock = collection(db, 'items')

    const queryActualizarStock = query(
      queryCollectionStock,
      where( documentId() , 'in', cartList.map(it => it.id))
    )

    const batch = writeBatch(db)

    await getDocs(queryActualizarStock)
    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
      stock: res.data().stock - cartList.find(item=> item.id === res.id).cantidad
    })))
    .catch(err=> console.log(err))
    .finally(()=>clearCart())

    batch.commit()
  }

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
        <div className="cart-form-head">
          <h4>FORMULARIO</h4>
        </div>
        
          <div className="cart-form-box">
            <form className="form-display" onSubmit={finishBuying}> 
              <p className="text-form">Name:</p>
              <input className="input-form" type="text" />
              <p className="text-form">Phone</p>
              <input className="input-form" type="Phone" />
              <p className="text-form">Email:</p>
              <input className="input-form" type="Email" />
              <input className="button-form" type="submit" value="Enviar"/>
          </form> 
        </div>
      </div>

    </div>
  )
}

export default Cart