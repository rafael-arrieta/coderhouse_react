
import { useState, useEffect } from 'react';
import{collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useParams } from 'react-router-dom';
//import { getFetch } from '../../database/getFetch';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = ({cargando}) => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    const {categoriaId} = useParams()
    
    useEffect (() =>{
        const db = getFirestore()
        const queryCollection = collection(db, 'items')
        if(categoriaId){
            const queryFiltrada = query(
                queryCollection, 
                where('categoria','==',categoriaId)
                )
            getDocs(queryFiltrada)
            .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()} )) ) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        
        } else {            
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()} )) ) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
        },[categoriaId])



    return (
        <>
            {cargando}
            { loading ? <h1>Cargando...</h1>
                :
                <ItemList productos={productos}/>
            }
        </>
    )
}

export default ItemListContainer