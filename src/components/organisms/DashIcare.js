import React from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap';

import DashTitle from '../molecules/DashTitle'
import FormGroup from '../molecules/FormGroup';

function DashIcare() {
    return (
        <Row className="w-100">
            <Col xs={12} className="">
                <div className="m-3">
                    <DashTitle word={"Icare"} />
                    <hr></hr>
                    <Form onSubmit={(e) => {}}>
                        <FormGroup 
                            id={"formBasicUsername"}
                            label={"Email"}
                            type={"email"}
                            placeholder={"Enter Email"}
                            name={"email"}
                            
                        />
                        <Button type="submit" variant="primary" disabled={()=>{}}>
                            Login
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    )
}

export default DashIcare
