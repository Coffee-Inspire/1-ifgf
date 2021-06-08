import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {Form,Row,Col} from 'react-bootstrap';
import ButtonCustom from '../atoms/ButtonCustom';

import { sendEmailAction } from '../../redux/actions/email.actions';


function FormContact() {
    const dispatch = useDispatch();
    const emailData = useSelector(state => state.email);

    const [formEmail, setFormEmail] = useState({
        name : "",
        email : "",
        no : "",
        subject : "",
        msg : "",
    });

    const valueChange = (e) => {
        setFormEmail({
            ...formEmail,
            [e.target.name] : e.target.value
        })
    }

    return (
        <>
        <Form onSubmit={(e) => {
            e.preventDefault();
            dispatch(sendEmailAction(e, formEmail, setFormEmail));
            }} className="px-lg-5">
            <Row className="px-lg-5">
                <Col className="d-flex flex-column flex-lg-row py-4" lg={7}>
                    <Col lg={3}>
                        <Form.Label><h5>Nama</h5></Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control required onChange={(e) => valueChange(e)} name="name" value={formEmail.name} placeholder="Nama"/>
                    </Col>
                </Col>
                <Col className="d-flex flex-column flex-lg-row py-4" lg={7}>
                    <Col lg={3}>
                        <Form.Label><h5>Email</h5></Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control required onChange={(e) => valueChange(e)} name="email" value={formEmail.email} type="email" placeholder="Email"/>
                    </Col>
                </Col>
                <Col className="d-flex flex-column flex-lg-row py-4" lg={7}>
                    <Col lg={3}>
                        <Form.Label><h5>No. Handphone</h5></Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control required onChange={(e) => valueChange(e)} name="no" value={formEmail.no} placeholder="No. Handphone"/>
                    </Col>
                </Col>
                <Col className="d-flex flex-column flex-lg-row py-4" lg={7}>
                    <Col lg={3}>
                        <Form.Label ><h5>Subject</h5></Form.Label>
                    </Col>
                    <Col lg={9}>
                        <Form.Control required onChange={(e) => valueChange(e)} name="subject" value={formEmail.subject} placeholder="Subject"/>
                    </Col>
                </Col>
                <Col className="d-flex flex-column flex-lg-row py-4" lg={7}>
                    <Col lg={3}>
                        <Form.Label><h5>Isi Pesan</h5></Form.Label>
                    </Col>
                    <Col lg={11}>
                        <Form.Control required onChange={(e) => valueChange(e)} name="msg" value={formEmail.msg} placeholder="Tulis pesan anda kepada kami" as="textarea" rows={10}/>
                    </Col>
                </Col>
                <Col className="d-flex flex-column flex-lg-row py-4" lg={7}>
                    <Col lg={3}>
                    </Col>
                    <Col lg={4}>
                        <ButtonCustom word={emailData.isLoading ? "mengirim...." : "kirim"}/>
                    </Col>
                </Col>
                <Col className="d-flex flex-column flex-lg-row py-4" lg={7}>
                    <Col lg={3}>
                    </Col>
                    <Col lg={4}>
                        {
                            emailData.success && 
                                <div className="text-success">
                                    {emailData.successText}
                                </div>
                        }
                        {
                            emailData.error && 
                                <div className="text-danger">
                                    {emailData.errorText}
                                </div>
                        }
                    </Col>
                </Col>
                
            </Row>
        </Form>
        </>
    )
}

export default FormContact
