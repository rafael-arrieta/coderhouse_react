import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getFetch } from '../../database/getFetch';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState ({})
  const {detalleId}= useParams()

    useEffect (() =>{
            getFetch(detalleId)
            .then(respuesta => setProducto(respuesta))
    }, [])


  return (
    <div>
        <ItemDetail producto={producto}/>
    </div>
  )
}

export default ItemDetailContainer