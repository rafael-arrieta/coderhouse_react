import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({load}) => {
  const [product, setProduct] = useState ({})
  const [loading, setLoading] = useState (true)
  const {detailId}= useParams()

    // useEffect (() =>{
    //         getFetch(detalleId)
    //         .then(respuesta => setProducto(respuesta))
    //         .finally(() => setLoading(false)) 
    // }, [])

    useEffect (() =>{
        const db = getFirestore()
        const queryProduct = doc(db,'items',detailId)
        getDoc(queryProduct)
        .then(resp => setProduct ( {id: resp.id, ...resp.data() } ) )
        .catch(err => console.log(err))
        .finally(() => setLoading(false)) 
    },[detailId])


  return (
    <>
      {load}
            {loading ? <h1>Cargando...</h1>
                :
                <ItemDetail product={product}/>  
            }

    </>
  )
}

export default ItemDetailContainer