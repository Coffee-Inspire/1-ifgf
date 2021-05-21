import React from 'react'
import { Form } from 'react-bootstrap';

function FormGroup(props) {
    return (
        <Form.Group controlId={props.id} className="mb-3">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control 
              required
              type={props.type} 
              placeholder={props.placeholder}
              name={props.name}
              autoComplete={props.autocomplete && props.autocomplete}/>
        </Form.Group>
    )
}

export default FormGroup
