import {Form,Row,Col} from 'react-bootstrap';
import ButtonCustom from '../atoms/ButtonCustom';

function FormContact() {
    return (
        <Form className="px-lg-5">
            <Row className="px-lg-5">
                <Col className="d-flex flex-column flex-lg-row py-4" lg={7}>
                    <Col lg={3}>
                        <Form.Label><h5>Nama</h5></Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control placeholder="Nama"/>
                    </Col>
                </Col>
                <Col className="d-flex flex-column flex-lg-row py-4" lg={7}>
                    <Col lg={3}>
                        <Form.Label><h5>Email</h5></Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control placeholder="Email"/>
                    </Col>
                </Col>
                <Col className="d-flex flex-column flex-lg-row py-4" lg={7}>
                    <Col lg={3}>
                        <Form.Label><h5>No. Handphone</h5></Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control placeholder="No. Handphone"/>
                    </Col>
                </Col>
                <Col className="d-flex flex-column flex-lg-row py-4" lg={7}>
                    <Col lg={3}>
                        <Form.Label><h5>Subject</h5></Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control placeholder="Subject"/>
                    </Col>
                </Col>
                <Col className="d-flex flex-column flex-lg-row py-4" lg={7}>
                    <Col lg={3}>
                        <Form.Label><h5>Isi Pesan</h5></Form.Label>
                    </Col>
                    <Col lg={11}>
                        <Form.Control placeholder="Tulis pesan anda kepada kami" as="textarea" rows={10}/>
                    </Col>
                </Col>
                <Col className="d-flex flex-column flex-lg-row py-4" lg={7}>
                    <Col lg={3}>
                    </Col>
                    <Col lg={4}>
                        <ButtonCustom word={"kirim"}/>
                    </Col>
                </Col>
                
            </Row>
        </Form>
    )
}

export default FormContact
