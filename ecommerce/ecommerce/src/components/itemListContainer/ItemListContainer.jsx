
import { useState, useEffect } from 'react';
import{collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useParams } from 'react-router-dom';
//import { getFetch } from '../../database/getFetch';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = ({load}) => {
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState (true)
    const {categoryId} = useParams()
    
    useEffect (() =>{
        const db = getFirestore()
        const queryCollection = collection(db, 'items')
        if(categoryId){
            const queryFiltered = query(
                queryCollection, 
                where('category','==',categoryId)
                )
            getDocs(queryFiltered)
            .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()} )) ) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        
        } else {            
            getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map(prod => ({id: prod.id, ...prod.data()} )) ) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
        },[categoryId])



    return (
        <>
            {load}
            { loading ? <h1>Cargando...</h1>
                :
                <ItemList products={products}/>
            }
        </>
    )
}

export default ItemListContainer