import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='barrita'>
        <div className='logo'>
            <h2>NavBar</h2>
        </div>
        <div className="navMenu">
            <div className="buscar">
                <input type='text' placeholder='Que buscás?'/>
                <button className='btn'></button>
            </div>
            <a>Contacto</a>
            <button className="carrito"> 
                
            </button>
            <button className='btnSing'>Sing in</button>
            
        </div>


    </div>
  )
}

export default NavBar