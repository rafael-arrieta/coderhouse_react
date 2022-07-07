import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='nav'>
        <div className='logo'>
            <h2>NavBar</h2>
        </div>
    
        <div className="buscar">
            <input type='text' placeholder='Que buscás?'/>
            <button className='btn'></button>
        </div>
        
        <div className='navMenu'>
            <a>Contacto</a>
            <button className="carrito"/>
            <button className='btnSign'>Sign in</button>
        </div>
        


    </div>
  )
}

export default NavBar