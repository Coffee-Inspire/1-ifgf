import {Container,Row,Col} from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid id="footerContainer">

            <Row className="d-flex flex-row justify-content-evenly mt-5 py-5">
                <Col lg={2} >
                    <h6 className="mb-4">ABOUT</h6>
                    <div id="footerPoints">
                        <p>Our Church</p>
                        <p>Pastor</p>
                    </div>
                </Col>
                <Col lg={2}>
                    <h6 className="mb-4">CONNECT</h6>
                    <div id="footerPoints">
                        <p>IFGF YOUTH</p>
                        <p>IFGF KIDS</p>
                    </div>
                </Col>
                <Col lg={1}>
                    <h6 className="mb-4">CONTACT US</h6>
                    <div id="footerPoints">
                        <p>021-2321-2341</p>
                        <p>test@email.com</p>
                        <p>Jalan Anggrek 3 E/482 BTN Sweta Mataram</p>
                    </div>
                </Col>
            </Row> 
            <Row className="fw-normal bg-light text-dark text-center py-2">
                <Col>
                    @2021 by IFGF Mataram
                </Col>
            </Row>

        </Container>
    )
}

export default Footer
