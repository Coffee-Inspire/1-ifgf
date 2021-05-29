// importing react-bootstrap tags
import {Navbar,Nav} from 'react-bootstrap';

// importing image for emblem
import emblem from '../../assets/images/ifgfLogoPlain.png'

function Navigation() {
    return (

    <Navbar variant="dark" bg="dark" expand="lg" className="pt-4 pb-3">
        <Navbar.Brand href="#home" className="myNavbarEmblemFrame">
            <img alt="" src={emblem} className="myNavbarEmblem" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="w-100 justify-content-end">
            <Nav className="myNavbarItems">
                <Nav.Link href="/dashboard">ABOUT</Nav.Link>
                <Nav.Link href="/admin">PRAYER REQUEST</Nav.Link>
                <Nav.Link href="#link">CONTACT US</Nav.Link>
            </Nav>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
            
    )
}

export default Navigation
