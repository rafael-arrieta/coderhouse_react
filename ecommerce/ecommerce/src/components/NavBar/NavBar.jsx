import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./NavBar.css";
import Mybtn from "../Mybtn/Mybtn";
import { useCartContext } from "../../Context/CartContext";

// Navigation bar component
//Contains a root directory, filtering by category and the cart access button
const NavBar = () => {
    // Function that makes the interaction with the context provider, 
    //brings the value of the total amount of products in the cart
    const { getQuantTotal } = useCartContext();

    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container fluid>
                <Link className="text-title" to="/">
                    Juguetes 3D
                </Link>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <NavLink className="text-link" to="/category/flexible">
                            Flexibles |
                        </NavLink>
                        <NavLink className="text-link" to="/category/puzzle">
                            Puzzle |
                        </NavLink>
                        <NavLink className="text-link" to="/category/buildable">
                            Buildable |
                        </NavLink>
                    </Nav>
                    <div className="nav-cart-link">
                        <p className="text-cant">
                            {" "}
                            {getQuantTotal() !== 0 &&
                                `Cantidad: ${getQuantTotal()}`}{" "}
                        </p>
                    </div>
                    <div className="nav-cart-link">
                        <Link to="/cart">
                            <Mybtn content={"Carrito"} />
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
