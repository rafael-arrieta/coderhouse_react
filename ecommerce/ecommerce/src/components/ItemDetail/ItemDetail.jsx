import Contador from '../contador/Contador';
import './ItemDetail.css'


const ItemDetail = ({producto}) => {
  
  return (
    <div className="container-detail">

        <div className="container-image">
        <img className="card-image" src={producto.imagen} alt=''/>
        </div>

        <div className="container-description">
            <h1 className="h1-detail">{producto.nombre}</h1>
            <h2 className="h2-detail">Descripcion del producto: Juguete {producto.categoria}</h2>
            <h3 className="h3-detail">Precio unitario: ${producto.precio}</h3>
            <p>Cantidad disponibles: {producto.stock}</p>
            <div className="container-compra">
                <Contador intial={1} stock={producto.stock}/>
                <button className='btn-agregar'>Agregar</button>

            </div>

        </div>

    </div>
  )
}

export default ItemDetail