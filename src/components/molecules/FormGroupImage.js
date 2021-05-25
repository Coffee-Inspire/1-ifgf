import React from 'react'
import { Form } from 'react-bootstrap';
// import bsCustomFileInput from "bs-custom-file-input";

function FormGroupImage(props) {

    const checkFile = (e) =>{
        if(e.target.files[0].type === "image/jpeg" || e.target.files[0].type === "image/png"){
            props.setImage({
                ...props.image,
                status: "is-valid",
                disable: "",
                file: e.target.files[0]
            })
        }else {
            props.setImage({
                ...props.image,
                status: "is-invalid",
                disable: "disabled",
            })
        }
    }

    // bsCustomFileInput.init();

    return (
        <>
        <Form.Group controlId="formBasicUpload">
            <Form.Label>Upload File</Form.Label>
            <Form.File id="formcheck-api-custom" custom>
            <Form.File.Input required className={props.image.status} accept="image/png,image/jpeg" onChange={checkFile}/>
            <Form.File.Label data-browse="Browse">
                Choose File
            </Form.File.Label>
            <Form.Control.Feedback type="valid">Ready for upload!</Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">Must be image .jpg or .png!</Form.Control.Feedback>
            </Form.File>
        </Form.Group>
        </>
    )
}

export default FormGroupImage
