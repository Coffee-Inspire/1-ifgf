import React, { useState } from 'react'
import {Form,Row,Col} from 'react-bootstrap';
import ButtonCustom from '../atoms/ButtonCustom';

function FormPrayer() {
    const [formPrayer, setFormPrayer] = useState({
        name : "",
        msg : "",
    });

    const valueChange = (e) => {
        setFormPrayer({
            ...formPrayer,
            [e.target.name] : e.target.value
        })
    }

    const sendWa = () => {

        let msg = "Halo nama saya " + formPrayer.name + "%0a" + "Kebutuhan Doa : "+ encodeURIComponent(formPrayer.msg.trim())

        window.open('https://api.whatsapp.com/send?phone=6282341798911&text=' + msg, '_blank');
        // window.open('http://www.google.com', '_blank');
    }

    return (
        <Form onSubmit={(e) => {
            e.preventDefault();
            sendWa();
        }} className="px-lg-5">
            <Row className="px-lg-5">
                <Col className="d-flex flex-column flex-lg-row py-4" lg={7}>
                    <Col lg={3}>
                        <Form.Label><h5>Nama</h5></Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control required onChange={(e) => valueChange(e)} name="name" value={formPrayer.name} placeholder="Nama"/>
                    </Col>
                </Col>
                <Col className="d-flex flex-column flex-lg-row py-4" lg={7}>
                    <Col lg={3}>
                        <Form.Label><h5>Kebutuhan Doa</h5></Form.Label>
                    </Col>
                    <Col lg={11}>
                        <Form.Control required onChange={(e) => valueChange(e)} name="msg" value={formPrayer.msg} placeholder="Tuliskan secara singkat kebutuhan doa saudara" as="textarea" rows={10}/>
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
