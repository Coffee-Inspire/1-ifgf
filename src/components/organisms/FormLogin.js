import React from 'react'
import { Button, Form } from 'react-bootstrap';

//
import FormGroup from '../molecules/FormGroup';

function FormLogin(props) {
    return (
        <Form onSubmit={(e) => {props.setStatus({...props.status, error : false}); props.handleLogin(e)}}>
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
                validator={props.status}
            />
            <Button type="submit" variant="primary" disabled={props.isLoading}>
                {props.isLoading ? "Login in..." : "Login in"}
            </Button>
        </Form>
    )
}

export default FormLogin
