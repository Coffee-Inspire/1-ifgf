import React, {useState} from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import DashTitle from '../molecules/DashTitle';
import DashText from '../molecules/DashText';
import FormGroup from '../molecules/FormGroup';
import FormGroupImage from '../molecules/FormGroupImage';

function DashHomePage() {
    const [formEdit, setFormEdit] = useState({
        textHome : "value text Home",
        descHome : "value desc Home",
    })

    const valueChange = (e) => {
        setFormEdit({
            ...formEdit,
            [e.target.name] : [e.target.value]
        })
    }

    const [image, setImage] = useState({
        file: null,
        status: "",
        disable: "",
    })

    return (
        <Row className="w-100">
            <Col className="">
                <div className="m-3">
                    <DashTitle word={"Home Page Details"} />
                    <hr></hr>
                    <DashText word={"Home Page Details"} />
                    <Form onSubmit={(e) => {}}>
                        <FormGroupImage 
                            image={image}
                            setImage={setImage}
                        />
                        <FormGroup 
                            id={"formBasicHome"}
                            label={"Home Text"}
                            type={"text"}
                            placeholder={"Enter Text"}
                            name={"textHome"}
                            value={formEdit.textHome}
                            onChange={(e) => valueChange(e)}
                        />
                        <FormGroup 
                            id={"formBasicHome"}
                            label={"Home Description"}
                            type={"text"}
                            placeholder={"Enter Description"}
                            name={"descHome"}
                            value={formEdit.descHome}
                            onChange={(e) => valueChange(e)}
                        />
                        <Button type="submit" variant="primary" disabled={()=>{}}>
                            Edit
                        </Button>
                    </Form>
                </div>
            </Col>
        </Row>
    )
}

export default DashHomePage
