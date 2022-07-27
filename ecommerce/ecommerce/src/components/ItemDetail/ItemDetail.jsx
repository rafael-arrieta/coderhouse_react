import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'


const ItemDetail = ({producto}) => {

  const onAdd = (cant) => {
    console.log(`la cantidad es ${cant}`);
    return
  } 
  
  return (
    <div className="container-detail">
        <img className="container-image"src={producto.imagen} alt=''/>
        <div className="container-description">
            <h1 className="h1-detail">{producto.nombre}</h1>
            <h2 className="h2-detail">Descripcion del producto: Juguete {producto.categoria}</h2>
            <h3 className="h3-detail">Precio unitario: ${producto.precio}</h3>
            <p>Stock: {producto.stock} unidades</p>
            <div className="container-compra">
                <ItemCount intial={1} stock={producto.stock} onAdd={onAdd}/>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail