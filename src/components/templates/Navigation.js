// importing react-bootstrap tags
import {Navbar,Nav} from 'react-bootstrap';

// importing image for emblem
import emblem from '../../assets/images/ifgfLogoPlain.png'

function Navigation() {
    return (

    <Navbar variant="dark" bg="dark" expand="lg">
        <Navbar.Brand href="#home">
            <div className="myNavbarEmblemFrame">
                <img alt="" src={emblem} className="myNavbarEmblem" />
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
            
    )
}

export default Navigation
