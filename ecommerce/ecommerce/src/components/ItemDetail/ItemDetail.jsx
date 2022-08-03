import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { useCartContext } from "../../Context/CartContext";
import MiBtn from '../MiBtn/MiBtn';
import {Link} from 'react-router-dom';


const ItemDetail = ({producto}) => {

  const {addToCart, cartList}=useCartContext()
  const [mostrarCount, setMostrarCount] = useState(true)
  
  const onAdd = (cant) => {
    setMostrarCount();
    addToCart({producto, cantidad: cant});
    console.log('la cantidad es' +cant);
  }

  console.log(cartList);
  
  return (
    <div className="container-detail">
        <img className="container-image"src={producto.imagen} alt=''/>
        <div className="container-description">
            <h1 className="h1-detail">{producto.nombre}</h1>
            <h2 className="h2-detail">Descripcion del producto: Juguete {producto.categoria}</h2>
            <h3 className="h3-detail">Precio unitario: ${producto.precio}</h3>
            <p>Stock: {producto.stock} unidades</p>
            <div className="container-compra">
                {mostrarCount?
                  <ItemCount intial={1} stock={producto.stock} onAdd={onAdd}/>
                  :
                  <Link to="/cart"><MiBtn contenido={'To Cart'}/></Link>
                }

                
            </div>
        </div>
    </div>
  )
}

export default ItemDetail