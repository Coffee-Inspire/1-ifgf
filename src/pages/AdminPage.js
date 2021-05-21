import React, { useState } from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'

import FormLogin from '../components/organisms/FormLogin'
import CenterTitle from '../components/molecules/CenterTitle'

import { loginAction } from '../redux/actions/auth.actions';

function AdminPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)

    const [status, setStatus] = useState({
        error : false,
        text : "",
    })

    const handleLogin = (e) => {
        e.preventDefault();
        const data = {
            email : e.target.email.value,
            password : e.target.password.value
        };
        
        dispatch(loginAction(data, history, setStatus))
    }

    return (
        <Container fluid>
            <CenterTitle word={"Login IFGF Mataram"} />
            <Row className="justify-content-center">
                <Col xs={11} md={5}>
                    <FormLogin 
                        status={status} 
                        setStatus={setStatus}
                        handleLogin={handleLogin}
                        isLoading={auth.isLoading}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default AdminPage
