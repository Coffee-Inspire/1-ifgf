import React, { useState } from 'react'
import { Container, Row, Col, Spinner, Form, Button, Image } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import FormLogin from '../components/organisms/FormLogin'
import CenterTitle from '../components/molecules/CenterTitle'

import { loginAction } from '../redux/actions/auth.actions';

function AdminPage() {
    const history = useHistory();
    const dispatch = useDispatch();

    return (
        <Container fluid>
            <CenterTitle word={"Login IFGF Mataram"} />
            <Row className="justify-content-center">
                <Col xs={11} md={5}>
                    <FormLogin />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminPage
