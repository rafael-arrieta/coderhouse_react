import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../database/getFetch';
import CardItem from '../cardItem/CardItem';
import './ItemListContainer.css'

const ItemListContainer = ({cargando}) => {
    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)

    const {categoriaId} = useParams()
    useEffect (() =>{
        if (categoriaId) {
            getFetch()
            .then(respuesta => setProductos(respuesta.filter(prod=>prod.categoria==categoriaId)))
            .catch(err => console.log(err))
            .finally(() => setLoading(false)) 
        } else {
            getFetch()
            .then(respuesta => setProductos(respuesta))
            .catch(err => console.log(err))
            .finally(() => setLoading(false)) 
        }
    }, [categoriaId])
    
    return (
        <div className='contenedor'>
            {cargando}
            { loading ? <h1>Cargando...</h1>
                :
                productos?.map((prod) => 
                    <CardItem nombre={prod.nombre} precio = {prod.precio} categoria={prod.categoria} imagen={prod.imagen}
                    id={prod.id} stock={prod.stock} />)
            }

            
        </div>
    )
}
//{listaDigimon.map((e) => <Digimon name = {e.name} nivel = {e.level} img = {e.img}/>)}
export default ItemListContainer