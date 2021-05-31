// importing react-bootstrap tags
import {Navbar,Nav} from 'react-bootstrap';

// importing library from react router dom
import {Link} from "react-router-dom";

// importing image for emblem
import emblem from '../../assets/images/ifgfLogoPlain.png'

function Navigation() {
    return (

    <Navbar variant="dark" bg="dark" expand="lg" className="pt-4 pb-3">
        <Link to="/" className="myNavbarEmblemFrame">
            <img alt="" src={emblem} className="myNavbarEmblem" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 justify-content-end">
            <Nav className="myNavbarItems">
                <Link to = "/about" className="nav-link">ABOUT</Link>
                <Link to = "/" className="nav-link">PRAYER REQUEST</Link>
                <Link to = "/" className="nav-link">CONTACT US</Link>
            </Nav>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
            
    )
}

export default Navigation
