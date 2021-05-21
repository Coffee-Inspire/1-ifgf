import React from 'react'
import { Button, Form } from 'react-bootstrap';

//
import FormGroup from '../molecules/FormGroup';
import FormGroupPass from '../molecules/FormGroupPass';

function FormLogin(props) {
    return (
        <Form onSubmit={() => {}}>
            <FormGroup 
                id={"formBasicUsername"}
                label={"Email"}
                type={"email"}
                placeholder={"Enter Email"}
                name={"email"}
                
            />
            <FormGroup 
                id={"formBasicPassword"}
                label={"Password"}
                type={"password"}
                placeholder={"Enter Password"}
                name={"password"}
                
            />
            <Button type="submit" variant="primary">
                Login
            </Button>
        </Form>
    )
}

export default FormLogin
