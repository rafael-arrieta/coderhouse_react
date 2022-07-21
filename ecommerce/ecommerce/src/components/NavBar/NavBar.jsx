import {Link, NavLink} from 'react-router-dom';
import './NavBar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import ModalCarrito from '../Modal/ModalCarrito';


const NavBar = () => {
  return (
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container fluid>
        <Link className='text-title' to='/'>
          <Navbar.Brand>Juguetes 3D</Navbar.Brand>
        
        </Link>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavLink className='text-link' to="/categoria/flexible"><Nav.Link href="#action1">Flexibles  |</Nav.Link></NavLink>
            <NavLink className='text-link' to="/categoria/rompecabeza"><Nav.Link href="#action1">Rompecabezas  |</Nav.Link></NavLink>
            <NavLink className='text-link' to="/categoria/encastrable"><Nav.Link href="#action1">Encastrables  |</Nav.Link></NavLink>
            
            
            
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              
            </Nav.Link>
            <ModalCarrito/>
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar