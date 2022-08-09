import React from 'react'
import { useState, useEffect } from 'react';
import{collection, getDocs, getFirestore, query, where} from 'firebase/firestore'
import { useParams } from 'react-router-dom';
//import { getFetch } from '../../database/getFetch';
import ItemList from '../ItemList/ItemList';



const ItemListContainer = ({cargando}) => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)
    
    
    //const [producto, setProducto] = useState ({})
    // useEffect (() =>{
    //     const db = getFirestore()
    //     const queryProducto = doc(db,'items','3ud9ITpOi7zbHitYyJz6')
    //     getDoc(queryProducto)
    //     .then(resp => setProducto ( {id: resp.id, ...resp.data() } ) )
    // },[])

    // useEffect (() =>{
    //     const db = getFirestore()
    //     const queryCollection = collection(db, 'items')
    //     getDocs(queryCollection)
    //     .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()} )) ) )
    //     .catch(err => console.log(err))
    //     .finally(() => setLoading(false)) 
    // },[])

    const {categoriaId} = useParams()
    
    useEffect (() =>{
        if(categoriaId){
            const db = getFirestore()
            const queryCollection = collection(db, 'items')
            const queryFiltrada = query(
                queryCollection, 
                where('categoria','==',categoriaId)
                )
            getDocs(queryFiltrada)
            .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()} )) ) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'items')
            getDocs(queryCollection)
            .then(resp => setProductos(resp.docs.map(prod => ({id: prod.id, ...prod.data()} )) ) )
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        }
        },[categoriaId])

    // const {categoriaId} = useParams()
    // useEffect (() =>{
    //     if (categoriaId) {
    //         getFetch()
    //         .then(respuesta => setProductos(respuesta.filter(prod=>prod.categoria==categoriaId)))
    //         .catch(err => console.log(err))
    //         .finally(() => setLoading(false)) 
    //     } else {
    //         getFetch()
    //         .then(respuesta => setProductos(respuesta))
    //         .catch(err => console.log(err))
    //         .finally(() => setLoading(false)) 
    //     }
    // }, [categoriaId])

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