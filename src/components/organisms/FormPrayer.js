import {Form,Row,Col} from 'react-bootstrap';
import ButtonCustom from '../atoms/ButtonCustom';

function FormPrayer() {
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
                        <Form.Label><h5>Kebutuhan Doa</h5></Form.Label>
                    </Col>
                    <Col lg={11}>
                        <Form.Control placeholder="Tuliskan secara singkat kebutuhan doa saudara" as="textarea" rows={10}/>
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

export default FormPrayer
