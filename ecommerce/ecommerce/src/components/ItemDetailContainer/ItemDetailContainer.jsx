import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
//import { getFetch } from '../../database/getFetch';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({cargando}) => {
  const [producto, setProducto] = useState ({})
  const [loading, setLoading] = useState (true)
  const {detalleId}= useParams()

    // useEffect (() =>{
    //         getFetch(detalleId)
    //         .then(respuesta => setProducto(respuesta))
    //         .finally(() => setLoading(false)) 
    // }, [])

    useEffect (() =>{
        const db = getFirestore()
        const queryProducto = doc(db,'items',detalleId)
        getDoc(queryProducto)
        .then(resp => setProducto ( {id: resp.id, ...resp.data() } ) )
        .catch(err => console.log(err))
        .finally(() => setLoading(false)) 
    },[detalleId])


  return (
    <>
      {cargando}
            {loading ? <h1>Cargando...</h1>
                :
                <ItemDetail producto={producto}/>  
            }

    </>
  )
}

export default ItemDetailContainer