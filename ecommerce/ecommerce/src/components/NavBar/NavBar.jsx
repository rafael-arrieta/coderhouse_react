import {Link, NavLink} from 'react-router-dom';
import {Container,Nav,Navbar} from 'react-bootstrap'
import './NavBar.css'
import MiBtn from '../MiBtn/MiBtn';
import { useCartContext } from '../../Context/CartContext';

const NavBar = () => {

  const {cantTotal}= useCartContext()

  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container fluid>
        <Link className='text-title' to='/'>
          Juguetes 3D
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0"style={{ maxHeight: '100px' }}navbarScroll>
            <NavLink className='text-link' to="/categoria/flexible">Flexibles  |</NavLink>
            <NavLink className='text-link' to="/categoria/rompecabeza">Rompecabezas  |</NavLink>
            <NavLink className='text-link' to="/categoria/encastrable">Encastrables  |</NavLink>
          
          </Nav>
          <div className="nav-cart-link">
            <p className='text-cant'> {cantTotal() !== 0 && `Cantidad: ${cantTotal()}`} </p>
          </div>
          <div className="nav-cart-link">
            <Link to="/cart"><MiBtn contenido={'Carrito'}/></Link>
          </div>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  )
}

export default NavBar