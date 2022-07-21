import Contador from '../contador/Contador';
import './ItemDetail.css'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';

const ItemDetail = () => {

  const {detalleId}= useParams()
  

  useEffect(()=>{
    console.log(detalleId);
    return ()=> {console.log(detalleId)}
  },[detalleId])
  //getFetch(detalleId)

  return (
    <div className="container-detail">

        <div className="container-image">Hola IMAGE</div>

        <div className="container-description">
            <h1 className="h1-detail">Titulo</h1>
            <h2 className="h2-detail">Descripcion del producto: Juguete </h2>
            <h3 className="h3-detail">Precio unitario: $</h3>
            <div className="container-compra">
                <Contador/>
                <button className='btn-agregar'>Agregar</button>

            </div>

        </div>

    </div>
  )
}

export default ItemDetail