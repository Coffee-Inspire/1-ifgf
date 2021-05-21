import React from 'react'
import { Form } from 'react-bootstrap';

function FormGroupPass(props) {
    return (
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control required 
              type="password" 
              placeholder="Enter Password"
              name="password"
              autoComplete="current-password"/>
              {/* {fail.result === false ? 
              ( <Form.Text id="text-muted" muted>
              <span className="tw-text-basic tw-font-opensans">
              maaf, email dan password anda salah
              </span>
              </Form.Text>)
              :
              (<></>)
              }                */}
        </Form.Group>
    )
}

export default FormGroupPass
