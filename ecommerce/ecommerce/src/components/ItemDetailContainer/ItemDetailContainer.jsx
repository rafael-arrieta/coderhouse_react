import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getFetch } from '../../database/getFetch';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({cargando}) => {
  const [producto, setProducto] = useState ({})
  const [loading, setLoading] = useState (true)
  const {detalleId}= useParams()

    useEffect (() =>{
            getFetch(detalleId)
            .then(respuesta => setProducto(respuesta))
            .finally(() => setLoading(false)) 
    }, [])


  return (
    <div className='contenedor'>
      {cargando}
            {loading ? <h1>Cargando...</h1>
                :
                <ItemDetail producto={producto}/>  
            }

    </div>
  )
}

export default ItemDetailContainer