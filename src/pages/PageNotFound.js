import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

function PageNotFound() {
    return (
        <Container fluid>
            <Row className="my-5"> 
            <Col className="py-5 d-flex justify-content-center align-items-center flex-column" xs={12}>
                <h1>404</h1>
                
                <h1>Page Not Found</h1>
            </Col>
            </Row>
        </Container>
    )
}

export default PageNotFound
