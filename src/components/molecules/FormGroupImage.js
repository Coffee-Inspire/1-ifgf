import React from 'react'
import { Form } from 'react-bootstrap';

function FormGroupImage(props) {

    const checkFile = (e) =>{
        if(e.target.files && e.target.files[0]){
            if(e.target.files[0].type === "image/jpeg" || e.target.files[0].type === "image/png"){
                props.setImage({
                    ...props.image,
                    status: "is-valid",
                    disable: false,
                    file: e.target.files[0]
                })
            }else {
                props.setImage({
                    ...props.image,
                    status: "is-invalid",
                    disable: true,
                })
            }
        }
        else {
            props.setImage({
                ...props.image,
                file: null,
                status: "",
                disable: false,
            })
        }
    }


    return (
        <>
        <Form.Group controlId="formBasicUpload" className="mb-3">
            <Form.Label className="fw-bold">{props.label}</Form.Label>
            <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input className={props.image.status + " form-control"} accept="image/png,image/jpeg" onChange={checkFile}/>
            {/* <Form.File.Label data-browse="Browse">
                Choose File
            </Form.File.Label> */}
            <Form.Control.Feedback type="valid">Ready for upload!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Must be image .jpg or .png!</Form.Control.Feedback>
            </Form.File>
        </Form.Group>
        </>
    )
}

export default FormGroupImage
