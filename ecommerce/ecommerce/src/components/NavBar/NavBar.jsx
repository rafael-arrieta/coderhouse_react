import {Link, NavLink} from 'react-router-dom';
import {Container,Nav,Navbar,NavDropdown} from 'react-bootstrap'
import ModalCarrito from '../Modal/ModalCarrito';
import './NavBar.css'

const NavBar = () => {
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
            
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled></Nav.Link>*/}
          </Nav> 
          <ModalCarrito/>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  )
}

export default NavBar