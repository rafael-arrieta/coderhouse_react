import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { getFetch } from '../../database/getFetch';
import CardItem from '../cardItem/CardItem';
import './ItemListContainer.css'

const ItemListContainer = ({cargando}) => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)

    useEffect (() =>{
        getFetch()
        .then(respuesta => setProductos(respuesta))
        .catch(err => console.log(err))
        .finally(() => setLoading(false))

    }, [])

    const onAdd = (cant) =>{
        console.log(`la cantidad es ${cant}`);
    }
    return (
        <div className='contenedor'>
            {cargando}
            
            { loading ? <h1>Cargando...</h1>
                :
                productos?.map (prod => <CardItem nombre={prod.nombre} precio = {prod.precio}imagen={prod.imagen}/>) }   
        </div>
    )
}

export default ItemListContainer