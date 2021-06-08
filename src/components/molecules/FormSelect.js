import React from 'react'
import { Form } from 'react-bootstrap';

function FormSelect(props) {

    let options = [];

    if(props.present){
        options.push(
            <option key={"Present"} value={"Present"}>Present</option>
        )
    }

    for(let i = props.valueEnd; i >= props.valueStart; i--){
        options.push(
            <option key={i} value={i}>{i}</option>
        )
    }

    return (
        <Form.Group controlId={props.id} className="mb-3 me-3 w-100">
            <Form.Label className="fw-bold capitalize">{props.label}</Form.Label>
            <Form.Control 
                required
                as="select"
                type="select"
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
            >
                <option value="">Select Year</option>
                {options}
            </Form.Control>
        </Form.Group>
    )
}

export default FormSelect
